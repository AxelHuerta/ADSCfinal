// --------------------------------------------
// Se requiere de la conexión con la BD para 
// poder obtener los datos de los usuarios.
// PARA TRABAJAR A FUTURO
// --------------------------------------------

// --------------------------------------------
// imports
// --------------------------------------------
import { ReactNode, Component } from "react";
import MainArea from "../base/MainArea";
import Header from "../components/Header";

// --------------------------------------------
// class
// --------------------------------------------
export default class UserProfilePage extends Component {
  render(): ReactNode {
    let styles: string = "m-5 p-5 rounded-md drop-shadow-md bg-white";
    return (
      <MainArea>
        <Header title="Perfil de paciente > Fulanito de Tal" btn={<></>} />
        <div className="grid grid-cols-2">
          <div className={styles}>
            <center>
              {/* nombre del usuario */}
              <p className="text-2xl">Fulanito de Tal</p>
            </center>
            {/* datos básicos */}
            <div className="grid grid-cols-2 mt-5">
              <div>
                <p>
                  <b>Sexo</b>
                </p>
                <p>Hombre</p>
              </div>
              <div>
                <p>
                  <b>Edad</b>
                </p>
                <p>23</p>
              </div>
            </div>
            <div className="mt-5">
              <p>
                <b>Teléfono</b>
              </p>
              <p>5512345678</p>
            </div>
          </div>

          {/* Identificación del paciente */}
          <div className={styles}>
            <p className="text-2xl">Identificación del paciente</p>
            <div className="grid grid-cols-2 mt-5">
              <div>
                <p>
                  <b>Lugar de nacimiento</b>
                </p>
                <p>CDMX</p>
              </div>
              <div>
                <p>
                  <b>Fecha de nacimiento</b>
                </p>
                <p>8 de agosto de 1999</p>
              </div>
              <div>
                <p>
                  <b>Dirección</b>
                </p>
                <p>Calle falsa #123</p>
              </div>
            </div>
          </div>
        </div>
      </MainArea>
    );
  }
}
