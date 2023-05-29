import "./assets/styles/app.css";
import "./components/header/header";
import "./components/footer/footer";
import Routes from "./lib/router/components";

const app = document.querySelector("#app") as HTMLElement;

new Routes(app);

const header = document.createElement("app-header");
app.before(header);

const footer = document.createElement("app-footer");
app.after(footer);

