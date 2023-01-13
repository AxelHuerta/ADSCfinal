// --------------------------------------------
// imports
// --------------------------------------------
import { NavLink, To } from "react-router-dom";
import { ReactElement, Component } from "react";

// --------------------------------------------
// constructor
// --------------------------------------------
type Props = {
  text: string;
  to: To;
  icon: ReactElement;
};

// --------------------------------------------
// clase
// --------------------------------------------
export default class MenuLink extends Component<Props> {
  render() {
    return (
      <NavLink to={this.props.to} className="flex p-3 items-center">
        {/* icono */}
        {this.props.icon}
        {/* texto del link */}
        <li className="list-none ml-3">{this.props.text}</li>
      </NavLink>
    );
  }
}
