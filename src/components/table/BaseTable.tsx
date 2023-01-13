// --------------------------------------------
// imports
// --------------------------------------------
import { ReactNode } from "react";
import { Table } from "./Table";

// --------------------------------------------
// clase
// --------------------------------------------
export default class BaseTable implements Table {
  // generar cabecera de la tabla
  generarCabecera(titles: Array<string>): ReactNode {
    return (
      <thead>
        <tr>
          {titles.map((title: string) => (
            <th key={title} className="py-3 px-5">
              {title}
            </th>
          ))}
          <th>Detalles</th>
        </tr>
      </thead>
    );
  }
  // función para el cuerpo de la tabla
  generarCuerpo(): ReactNode {
    return null;
  }
}
