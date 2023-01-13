// --------------------------------------------
// imports
// --------------------------------------------
import { Component, ReactNode } from "react";

// --------------------------------------------
// constructor
// --------------------------------------------
type Props = {
  children: ReactNode;
};

// --------------------------------------------
// class
// --------------------------------------------
export default class MainArea extends Component<Props> {
  render(): ReactNode {
    return (
      <div className="w-full overflow-auto bg-slate-50 py-1 px-5">
        {this.props.children}
      </div>
    );
  }
}
