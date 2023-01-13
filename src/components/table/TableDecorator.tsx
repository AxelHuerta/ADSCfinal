// --------------------------------------------
// imports
// --------------------------------------------
import { ReactNode } from "react";
import { Table } from "./Table";

// --------------------------------------------
// clase
// --------------------------------------------
export default abstract class TableDecorator implements Table {
  protected tabla: Table;

  constructor(tabla: Table) {
    this.tabla = tabla;
  }

  generarCabecera(titles: string[]): ReactNode {
    return this.tabla.generarCabecera(titles);
  }

  generarCuerpo(): ReactNode {
    return this.tabla.generarCuerpo();
  }
}
