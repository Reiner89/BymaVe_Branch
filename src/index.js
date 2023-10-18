import React from "react";
import ReactDom from "react-dom/client";
import { Main } from "./components/Main";
import "./index.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

const RootElement = document.getElementById("root");
const root = ReactDom.createRoot(RootElement);

root.render(
  <>
    <Main></Main>
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
  </>
);
