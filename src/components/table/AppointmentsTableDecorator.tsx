// --------------------------------------------
// imports
// --------------------------------------------
import { ReactNode } from "react";
import TableDecorator from "./TableDecorator";
import {Appointments} from "../../data/Appointments";
import { BsThreeDots } from "react-icons/bs";

// --------------------------------------------
// class
// --------------------------------------------
export class AppointmentsTableDecorator extends TableDecorator {
  generarCabecera(titles: string[]): ReactNode {
    return this.tabla.generarCabecera(titles);
  }
  generarCuerpo(): ReactNode {
    return (
      <tbody>
        {/* Este código es de ejemplo al no tener conexión con la BD */}
        {Appointments.map((appointment) => (
          <tr className="odd:bg-slate-50 even:bg-white" key={appointment.id}>
            <th className="py-3">p-{appointment.id}</th>
            <th>{appointment.name}</th>
            <th>{appointment.apat}</th>
            <th>{appointment.amat}</th>
            <th>{appointment.date}</th>
            <th>{appointment.hour}</th>
            <th>
                <center>
                  <BsThreeDots />
                </center>
            </th>
          </tr>
        ))}
        {/* Esta línea se utilizaria en en caso de tener conexión con la BD */}
        {/* <Users /> */}
      </tbody>
    );
  }
}
