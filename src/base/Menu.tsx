// --------------------------------------------
// imports
// --------------------------------------------
import { Component, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import MenuLink from "../components/MenuLink";
// iconos
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineBell,
} from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaTooth } from "react-icons/fa";

// --------------------------------------------
// class
// --------------------------------------------
export default class Menu extends Component {
  render(): ReactNode {
    return (
      <>
        <nav
          className="flex flex-col justify-center min-w-max capitalize"
          style={{ maxHeight: "100vh" }}
        >
          {/* logo */}
          <div className="flex justify-center text-2xl my-3 font-bold">
            <FaTooth className="text-2xl" /> logo
          </div>

          {/* página principal */}
          <MenuLink
            text="página principal"
            to={"/"}
            icon={<AiOutlineHome className="text-2xl" />}
          />

          {/* página de pacientes */}
          <MenuLink
            text="pacientes"
            to={"/Users"}
            icon={<HiOutlineUserGroup className="text-2xl" />}
          />

          {/* página de citas */}
          <MenuLink
            text="citas"
            to={"/Appointments"}
            icon={<AiOutlineCalendar className="text-2xl" />}
          />

          {/* página de solicitudes */}
          <MenuLink
            text="solicitudes de cita"
            to={"/Requests"}
            icon={<AiOutlineBell className="text-2xl" />}
          />
        </nav>
        <Outlet />
      </>
    );
  }
}
