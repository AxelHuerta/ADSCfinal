// --------------------------------------------
// datos de simulación
// --------------------------------------------
export const Users = [
  {
    id: "0000",
    name: "Alison",
    apat: "Martínez",
    amat: "Guevara",
    age: "23",
    gender: "mujer",
  },
  {
    id: "0001",
    name: "Andrea",
    apat: "Carranza",
    amat: "Segura",
    age: "18",
    gender: "mujer",
  },
  {
    id: "0002",
    name: "Eduardo",
    apat: "Ladino",
    amat: "Arreola",
    age: "59",
    gender: "hombre",
  },
  {
    id: "0003",
    name: "Eduardo Tonatiuh",
    apat: "Serrano",
    amat: "Espinoza",
    age: "31",
    gender: "hombre",
  },
  {
    id: "0004",
    name: "Elizabeth",
    apat: "Gutierrez",
    amat: "Hernández",
    age: "39",
    gender: "mujer",
  },
  {
    id: "0005",
    name: "Uriel",
    apat: "Sánchez",
    amat: "Rincón",
    age: "54",
    gender: "hombre",
  },
];

// --------------------------------------------
// El código a continuación es utilzado en el caso
// de hacer conexión con la base de datos.
// --------------------------------------------

// // --------------------------------------------
// // imports
// // --------------------------------------------
// import { Component, ReactNode } from "react";
// import { BsThreeDots } from "react-icons/bs";
// import { Link } from "react-router-dom";

// interface State {
//   // Estado del componente
//   datosCargados: boolean;
//   users: [];
// }

// type User = {
//   idPaciente: string;
//   nombre: string;
//   apPaterno: string;
//   apMaterno: string;
//   correo: string;
//   telefono: string;
// };

// // --------------------------------------------
// // class
// // --------------------------------------------
// export default class Users extends Component<State> {
//   constructor(props: any) {
//     super(props);
//     this.state = { datosCargados: false, users: [] };
//   }

//   // obtener los datos de la base de datos
//   loadData = () => {
//     fetch("http://localhost/dentista/")
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({ datosCargados: true, users: json });
//       })
//       .catch(() => console.log("No se pudieron obtener los datos"));
//   };

//   componentDidMount() {
//     this.loadData();
//   }

//   render(): ReactNode {
//     // tomar los datos del estado, en ellos los datos de usuarios
//     const { datosCargados, users }: { datosCargados: boolean; users: [] } =
//       this.state;

//     // si los datos no se han cargado aún la página mostrará 'Cargando...'
//     if (!datosCargados) {
//       return (
//         <tbody>
//           <tr>
//             <th>Cargando...</th>
//           </tr>
//         </tbody>
//       );
//     }

//     return (
//       // tabla de usuarios
//       <tbody>
//         {users.map((user: User) => (
//           <tr key={user.idPaciente} className="odd:bg-slate-50 even:bg-white">
//             <th className="py-3">{user.idPaciente}</th>
//             <th>{user.nombre}</th>
//             <th>{user.apPaterno}</th>
//             <th>{user.apMaterno}</th>
//             <th>{user.correo}</th>
//             <th>
//               <Link to={"/UserProfilePage"}>
//                 <center>
//                   <BsThreeDots />
//                 </center>
//               </Link>
//             </th>
//           </tr>
//         ))}
//       </tbody>
//     );
//   }
// }
