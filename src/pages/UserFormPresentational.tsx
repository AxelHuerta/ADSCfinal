// --------------------------------------------
// imports
// --------------------------------------------
import { Component, ReactNode } from "react";
import MainArea from "../base/MainArea";
import Header from "../components/Header";
import Input from "../components/Input";

type Props = {
  handleSumbit: any;
  newID: any;
  onChange: any;
};

// --------------------------------------------
// component
// --------------------------------------------
export default class UserFormPresentational extends Component<Props> {
  render(): ReactNode {
    return (
      <MainArea>
        <Header title="agregar nuevo paciente" btn={<></>} />
        {/* formularios */}
        <form
          onSubmit={this.props.handleSumbit}
          className="bg-white m-5 p-5 rounded-md drop-shadow-md"
        >
          <p className="text-2xl mb-5">datos básicos</p>
          <p className="my-5">
            <b>id paciente </b>
            {`P-${this.props.newID()}`}
          </p>
          <Input
            type={"text"}
            name={"name"}
            placeholder={"nombre"}
            onChange={this.props.onChange}
          />
          <Input
            type={"text"}
            name={"apat"}
            placeholder={"apellido paterno"}
            onChange={this.props.onChange}
          />
          <Input
            type={"text"}
            name={"amat"}
            placeholder={"apellido materno"}
            onChange={this.props.onChange}
          />
          <Input
            type={"number"}
            name={"age"}
            placeholder={"edad"}
            onChange={this.props.onChange}
          />
          <div>
            <p className="mt-3">Sexo</p>
            <input
              type="radio"
              name="gender"
              value="mujer"
              onChange={this.props.onChange}
            />
            <label>Mujer</label>
            <input
              type="radio"
              name="gender"
              value="hombre"
              onChange={this.props.onChange}
              className="ml-5"
            />
            <label>Hombre</label>
          </div>
          <br />
          <input
            type="submit"
            value="guardar datos"
            style={{ background: "var(--primary)" }}
            className="text-white rounded-full px-4 py-2 mt-5 capitalize"
          />
        </form>
      </MainArea>
    );
  }
}