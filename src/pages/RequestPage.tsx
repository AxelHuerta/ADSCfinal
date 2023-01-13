// --------------------------------------------
// imports
// --------------------------------------------
import { Component, ReactNode } from "react";
import MainArea from "../base/MainArea";
import Header from "../components/Header";

// --------------------------------------------
// class
// --------------------------------------------
export default class RequestsPage extends Component {
  render(): ReactNode {
    return (
      <MainArea>
        <Header title={"Solicitudes de citas"} btn={<></>} />
      </MainArea>
    );
  }
}
