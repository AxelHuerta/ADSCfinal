// --------------------------------------------
// imports
// --------------------------------------------
import { Component, ReactNode } from "react";
import MainArea from "../base/MainArea";
import { Calendar } from "react-calendar";

// --------------------------------------------
// class
// --------------------------------------------
export default class HomePage extends Component {
  render(): ReactNode {
    let styles: string = "m-5 p-5 rounded-md drop-shadow-md bg-white";
    return (
      <MainArea>
        <div className="grid grid-cols-2">
          <div
            className="m-5 p-5 rounded-md drop-shadow-md text-white text-white"
            style={{ background: "var(--primary)" }}
          >
            {/* calendario */}
            <Calendar />
          </div>
          {/* citas del dia */}
          <div className={styles}>
            <p className="text-xl ">Citas del día</p>
          </div>
        </div>
        {/* pacientes recientemente agregados */}
        <div className={styles}>
          <p className="text-xl ">Pacientes recientemente agregados</p>
          <br />
        </div>
        {/* solicitudes de citas próximas */}
        <div className={styles}>
          <p className="text-xl ">Solicitudes de citas próximas</p>
        </div>
      </MainArea>
    );
  }
}
