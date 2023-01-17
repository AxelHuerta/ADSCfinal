// --------------------------------------------
// imports
// --------------------------------------------
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users } from "../data/Users";
import UserFormPresentational from "./UserFormPresentational";

// --------------------------------------------
// component
// --------------------------------------------
function UserFormContainer() {
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
    <>
      <UserFormPresentational
        newID={newID}
        onChange={onChange}
        handleSumbit={handleSumbit}
      />
    </>
  );
}
export default UserFormContainer;
