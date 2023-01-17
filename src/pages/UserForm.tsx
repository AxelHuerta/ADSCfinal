// --------------------------------------------
// Dada la implementación de un segundo patrón
// de diseño, este componente ya no esta en uso,
// pero se deja para la comprobración del uso
// de dicho patrón.
// --------------------------------------------

// --------------------------------------------
// imports
// --------------------------------------------
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainArea from "../base/MainArea";
import Header from "../components/Header";
import { Users } from "../data/Users";

// --------------------------------------------
// component
// --------------------------------------------
function UserForm() {
  // --------------------------------------------
  // funciones
  // --------------------------------------------
  // generar el nuevo id
  const newID = (): string => {
    let lastUser = Users[Users.length - 1];
    let newId = parseInt(lastUser.id) + 1;

    if (newId < 10) {
      return `000${newId}`;
    } else if (newId < 100) {
      return `00${newId}`;
    } else if (newId < 1000) {
      return `0${newId}`;
    }

    return "";
  };

  // guardar cambios en los formularios
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  // guardar los datos del nuevo usuario
  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    perfil.id = newID();
    Users.push(perfil);
    console.log(perfil);
    nav("/Users");
  };
  // --------------------------------------------
  // hooks
  // --------------------------------------------
  // hook para crear los perfiles de usuario como un constructor
  const [perfil, setPerfil] = useState({
    id: "",
    name: "",
    apat: "",
    amat: "",
    age: "",
    gender: "",
  });

  // hook para navegar entre paginas
  const nav = useNavigate();

  return (
    <MainArea>
      <Header title="agregar nuevo paciente" btn={<></>} />
      {/* formularios */}
      <form
        onSubmit={handleSumbit}
        className="bg-white m-5 p-5 rounded-md drop-shadow-md"
      >
        <p className="text-2xl mb-5">datos básicos</p>
        <p className="my-5">
          <b>id paciente </b>
          {`P-${newID()}`}
        </p>
        <input
          type="text"
          name="name"
          placeholder="nombre"
          className="border-b-2 mx-5"
          onChange={onChange}
        />
        <input
          type="text"
          name="apat"
          placeholder="apellido paterno"
          className="border-b-2 mx-5"
          onChange={onChange}
        />
        <input
          type="text"
          name="amat"
          placeholder="apellido materno"
          className="border-b-2 mx-5"
          onChange={onChange}
        />
        <input
          type="number"
          name="age"
          placeholder="edad"
          className="border-b-2 mx-5"
          onChange={onChange}
        />
        <div>
          <p className="mt-3">Sexo</p>
          <input type="radio" name="gender" value="mujer" onChange={onChange} />
          <label>Mujer</label>
          <input
            type="radio"
            name="gender"
            value="hombre"
            onChange={onChange}
            className="ml-5"
          />
          <label>Hombre</label>
        </div>
        <br />
        <input
          type="submit"
          value="guardar datos"
          style={{ background: "var(--primary)" }}
          className="text-white rounded-full px-4 py-2 mt-5 capitalize"
        />
      </form>
    </MainArea>
  );
}
export default UserForm;
