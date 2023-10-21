import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
// Importamos los componentes a usar
import { Main } from "./components/Main";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";

const RootElement = document.getElementById("root");
const root = ReactDom.createRoot(RootElement);

root.render(
  <>    
    <Main/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
  </>
);
