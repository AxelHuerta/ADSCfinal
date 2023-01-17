// --------------------------------------------
// imports
// --------------------------------------------
import { Component, ReactNode } from "react";

type Props = {
  type: string;
  name: string;
  placeholder: string;
  onChange: any;
};

// --------------------------------------------
// class
// --------------------------------------------
export default class Input extends Component<Props> {
  render(): ReactNode {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        className="border-b-2 mx-5"
        onChange={this.props.onChange}
      />
    );
  }
}
