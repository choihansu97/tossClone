import {CreateRouter} from "./router.js";

const router = CreateRouter();
const container = document.querySelector('#app');

const pages = {
    home: () => container.innerText = "home",
    detail: () => container.innerHTML = "detail.",
    notFoundComponent: () => container.innerText = "404 Not Found"
}

router.addRoute("/", pages.home)
    .addRoute("/home", pages.home)
    .addRoute("/detail", pages.detail)
    .setNotFound(pages.notFoundComponent)
    .start()