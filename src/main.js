// // Este es el punto de entrada de tu aplicacion
import { login } from "./component/login.js";
import { changeRoute } from './lib/ruta.js';


window.addEventListener("load", ()=> {
    document.getElementById("root").append(login());
    window.addEventListener("hashchange", () =>{
        console.log(window.location.hash);
        changeRoute(window.location.hash)
    })
})

