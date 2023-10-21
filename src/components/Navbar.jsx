import { Button, Dropdown, Navbar } from "flowbite-react";
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";
import LogoEmpresa from "../Static/cont_home/logo_byma-ve_Secundario.webp";

export default function NavbarMenu() {
  return (
    <Navbar className="menu absolute w-full z-50 bg-black hidden md:flex md:bg-black lg:relative lg:h-[100vh] lg:bg-transparent">
      <div className="navbar w-full flex flex-row justify-between md:w-full md:justify-between md:flex md:flex-row lg:flex lg:flex-col lg:justify-between lg:w-full lg:h-[97vh]">
        <Navbar.Brand>
          <div className="cont-logo flex items-center content-start md:w-full h-[14vh] hover:opacity-75">
            <div className="logo max-h-[66px] cursor-pointer">
              <img
                className="bymave max-h-[66px] max-w-full"
                src={LogoEmpresa}
                alt="BymaVe-Innovation"
              />
            </div>
          </div>
        </Navbar.Brand>
        <div className="flex md:order-2 max-h-12 md:mt-[40px] lg:mt-0 lg:w-[95%]">
          <Button className="p-[0.125rem] bg-[#113853] hover:bg-white hover:z-50">
              <span className="txt lg:text-[15px] font-bold">
                Programar una Cita
              </span>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <div className="servicios md:mt-[15%] md:flex md:flex-row lg:flex lg:flex-col">
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <NavbarLink className="text-[#eaedec] font-bold lg:text-[18px] leading-[1.3] lg:mb-5 w-full hover:text-[#113853] md:mr-9 text-left">
                  Servicios
                </NavbarLink>
              }
            >
              <Dropdown.Item>Marketing - Diseño</Dropdown.Item>
              <Dropdown.Item>Plataformas Web</Dropdown.Item>
              <Dropdown.Item>Asesoría - Soporte</Dropdown.Item>
            </Dropdown>
            <Navbar.Link className="text-[#eaedec] font-bold lg:text-[18px] leading-[1.3] lg:mb-5 cursor-pointer md:mr-9">
              ¿Quiénes Somos
            </Navbar.Link>
            <Navbar.Link className="text-[#eaedec] font-bold lg:text-[18px] leading-[1.3] cursor-pointer md:mr-4">
              Contáctanos
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
