// --------------------------------------------
// imports
// --------------------------------------------
import { Component, ReactElement, ReactNode } from "react";

// --------------------------------------------
// constructor
// --------------------------------------------
type Props = {
  title: string;
  btn: ReactElement;
};

// --------------------------------------------
// class
// --------------------------------------------
export default class Header extends Component<Props> {
  render(): ReactNode {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "1em",
          }}
        >
          {/* título de la cabecera */}
          <div className="text-2xl font-bold">{this.props.title}</div>
          {/* botón de la cabecera */}
          <div>{this.props.btn}</div>
        </div>
        <hr />
      </>
    );
  }
}
