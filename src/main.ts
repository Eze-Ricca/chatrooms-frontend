import "./style.css";
import "./components/button-el/buttonel";
import "./components/header-el/headerEl";
import "./components/input-el/inputEl";
import "./components/select-el/selectEl";
import { state } from "./state";
import { initRouter } from "./router";

// console.log(state.pushMessage("probando un mensaje"));

(() => {
  initRouter(); //  Inicia las rutas
  state.init();
})();
