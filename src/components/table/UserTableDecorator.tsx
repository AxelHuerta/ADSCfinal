// --------------------------------------------
// imports
// --------------------------------------------
import { ReactNode } from "react";
import TableDecorator from "./TableDecorator";
import { Outlet, Link } from "react-router-dom";
import { Users } from "../../data/Users";
import { BsThreeDots } from "react-icons/bs";

// --------------------------------------------
// class
// --------------------------------------------
export class UserTableDecorator extends TableDecorator {
  generarCabecera(titles: string[]): ReactNode {
    return this.tabla.generarCabecera(titles);
  }
  generarCuerpo(): ReactNode {
    return (
      <tbody>
        {/* Este código es de ejemplo al no tener conexión con la BD */}
        {Users.map((user) => (
          <tr className="odd:bg-slate-50 even:bg-white" key={user.id}>
            <th className="py-3">p-{user.id}</th>
            <th>{user.name}</th>
            <th>{user.apat}</th>
            <th>{user.amat}</th>
            <th>{user.age}</th>
            <th>{user.gender}</th>
            <th>
              <Link to={"/Profile"}>
                <center>
                  <BsThreeDots />
                </center>
              </Link>
            </th>
          </tr>
        ))}
        <Outlet />
      </tbody>
    );
  }
}