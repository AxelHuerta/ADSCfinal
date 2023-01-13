// --------------------------------------------
// imports
// --------------------------------------------
import { Component, ReactElement, ReactNode } from "react";

// --------------------------------------------
// constructor
// --------------------------------------------
type Props = {
  text: string;
  icon: ReactElement;
};

// --------------------------------------------
// class
// --------------------------------------------
export default class Btn extends Component<Props> {
  render(): ReactNode {
    return (
      <button
        className="outline rounded-full px-4 py-2 text-white capitalize flex items-center"
        style={{
          background: "var(--primary)",
        }}
      >
        {this.props.icon} {this.props.text}
      </button>
    );
  }
}
