// Este es el punto de entrada de tu aplicacion

//const root = document.getElementById("root");


import { btnIngresar, fraseRegistro, loginClave, loginCorreo, logo, titulo, fraseRecuperarClave, iniciarSesionGoogle, fotoGoogle } from "./component/login.js";
logo();
titulo();
loginCorreo();
loginClave();
btnIngresar();
fraseRegistro();
fraseRecuperarClave();
iniciarSesionGoogle();
fotoGoogle();


function showLogo(element) {
    let root = document.getElementById("root");
    root.append(element)
}
showLogo(logo());

function showTitulo(element) {
    let root = document.getElementById("root");
    root.append(element)
}
showTitulo(titulo());

//funcion que muestra input mail en pantalla
function showCorreo(element) {
    let root = document.getElementById("root");
    root.append(element)
}
showCorreo(loginCorreo());

//funcion que muestra input clave en pantalla
function showClave(element) {
    let root = document.getElementById("root");
    root.append(element)
}
showClave(loginClave());

//funcion que muestra boton ingresar en pantalla
function showBtnIngresar(element) {
    let root = document.getElementById("root");
    root.append(element)
}
showBtnIngresar(btnIngresar());

function showFraseRegistro(element) {
    let root = document.getElementById("root");
    root.append(element)
}
showFraseRegistro(fraseRegistro());

function showRecuperarFrase(element) {
    let root = document.getElementById("root");
    root.append(element)
}
showRecuperarFrase(fraseRecuperarClave());

function showSesionGoogle(element) {
    let root = document.getElementById("root");
    root.append(element)
}
showSesionGoogle(iniciarSesionGoogle());

function showFotoGoogle(element) {
    let root = document.getElementById("root");
    root.append(element)
}
showFotoGoogle(fotoGoogle());

window.addEventListener("hashchange", function (){
    console.log(window.location.hash);
    if(window.location.hash === "#login"){
    
    }
    
});

