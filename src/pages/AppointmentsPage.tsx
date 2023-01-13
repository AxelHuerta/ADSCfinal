// --------------------------------------------
// imports
// --------------------------------------------
import { Component, ReactNode } from "react";
import MainArea from "../base/MainArea";
import Btn from "../components/Btn";
import Header from "../components/Header";
import { AppointmentsTableDecorator } from "../components/table/AppointmentsTableDecorator";
import BaseTable from "../components/table/BaseTable";
import { BiCalendarPlus } from "react-icons/bi";

// --------------------------------------------
// class
// --------------------------------------------
export default class AppointmentsPage extends Component {
  render(): ReactNode {
    // PATRÓN DE DISEÑO
    // aqui usamos los decorator
    let table = new BaseTable();
    let AppointmentsTable = new AppointmentsTableDecorator(table);

    // titulos de la cabecera de la tabla
    let titles: string[];
    titles = [
      "ID paciente",
      "Nombre",
      "Apellido paterno",
      "Apellido materno",
      "Fecha",
      "Hora",
    ];

    return (
      <MainArea>
        {/* cabecera */}
        <Header
          title="Listado de citas"
          btn={
            <Btn
              text="agregar cita"
              icon={<BiCalendarPlus className="mr-2 text-xl" />}
            />
          }
        />
        {/* tabla */}
        <table className="full-w rounded-lg drop-shadow-md mt-2 mx-auto">
          {AppointmentsTable.generarCabecera(titles)}
          {AppointmentsTable.generarCuerpo()}
        </table>
      </MainArea>
    );
  }
}
