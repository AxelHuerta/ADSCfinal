// --------------------------------------------
// imports
// --------------------------------------------
import { Component, ReactNode } from "react";
import MainArea from "../base/MainArea";
import Btn from "../components/Btn";
import Header from "../components/Header";
import { AiOutlineUserAdd } from "react-icons/ai";
import BaseTable from "../components/table/BaseTable";
import { UserTableDecorator } from "../components/table/UserTableDecorator";
import "../index.css";
import { Link } from "react-router-dom";
import {Users} from "../data/Users"

// --------------------------------------------
// class
// --------------------------------------------
export default class UsersPage extends Component {
  render(): ReactNode {
    // PATRÓN DE DISEÑO
    // aqui usamos los decorator
    let table = new BaseTable();
    let userTable = new UserTableDecorator(table);
    console.log(Users)

    // titulos de la cabecera de la tabla
    let titles: string[];
    titles = [
      "ID paciente",
      "Nombre",
      "Apellido paterno",
      "Apellido materno",
      "Edad",
      "Sexo",
    ];

    return (
      <MainArea>
        {/* cabecera */}
        <Header
          title="listado de pacientes"
          btn={
            <Link to={"/UserForm"}>
              <Btn
                text="agregar paciente"
                icon={<AiOutlineUserAdd className="mr-2 text-xl" />}
              />
            </Link>
          }
        />
        {/* tabla */}
        <table className="full-w rounded-lg drop-shadow-md mt-2 mx-auto">
          {userTable.generarCabecera(titles)}
          {userTable.generarCuerpo()}
        </table>
      </MainArea>
    );
  }
}
