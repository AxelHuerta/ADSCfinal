import { ReactNode } from "react";

export interface Table {
  generarCabecera(titles: Array<string>): ReactNode;
  generarCuerpo(): ReactNode;
}
