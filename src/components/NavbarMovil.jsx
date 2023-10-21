import { Dropdown, Navbar } from "flowbite-react";
import LogoEmpresa from "../Static/cont_home/logo_byma-ve_Secundario.webp";

export default function NavbarMovil() {
  return (
    <Navbar fluid rounded className="bg-[#1d1b1c]">
      <Navbar.Brand>
        <div className="cont-logo flex items-center md:w-full h-[9vh]">
          <div className="logo max-h-[66px] cursor-pointer">
            <img
              className="bymave max-h-[66px] max-w-full"
              src={LogoEmpresa}
              alt="BymaVe-Innovation"
            />
          </div>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Navbar.Link className="text-[#eaedec] font-bold hover:text-[#113853] border-b-0">
              Servicios
            </Navbar.Link>
          }
        >
          <Dropdown.Item>Marketing - Diseño</Dropdown.Item>
          <Dropdown.Item>Plataformas Web</Dropdown.Item>
          <Dropdown.Item>Asesoría - Soporte</Dropdown.Item>
        </Dropdown>
        <Navbar.Link className="text-white cursor-pointer font-bold hover:text-[#113853] border-b-0">
          ¿Quiénes Somos?
        </Navbar.Link>
        <Navbar.Link className="text-white cursor-pointer font-bold hover:text-[#113853] border-b-0">
          Contáctanos
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
