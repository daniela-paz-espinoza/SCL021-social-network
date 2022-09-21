import { createUser, loginWithGoogle } from "../lib/firebase.js";
import { changeRoute } from "../lib/ruta.js";


export const login = () => {
  const logearse = document.createElement("div");

  logearse.className = "container-login";
  // logearse.textContent = "este es el login!";
  //console.log(logearse);

  const logoPrincipal = document.createElement("img");
  logoPrincipal.setAttribute("width", "200px");
  logoPrincipal.setAttribute("src", "./component/logoNuevo.png");
  logearse.appendChild(logoPrincipal)

  const tituloUno = document.createElement("h1");
  tituloUno.textContent = "Comparte tus experiencias gatunas!!";
  logearse.appendChild(tituloUno);

  const ingresarCorreo = document.createElement("input");
  ingresarCorreo.setAttribute("placeholder", "E-mail");
  logearse.appendChild(ingresarCorreo);

  logearse.appendChild(document.createElement("br"));
  logearse.appendChild(document.createElement("br"));

  const ingresarClave = document.createElement("input");
  ingresarClave.setAttribute("placeholder", "Contraseña");
  logearse.appendChild(ingresarClave);

  logearse.appendChild(document.createElement("br"));
  logearse.appendChild(document.createElement("br"));


  
  const botonIngresar = document.createElement("button");
  botonIngresar.className = "btnIngresar";
  //botonIngresar.innerHTML = "<a href ='#/wall'>Ingresar</a>";
  botonIngresar.addEventListener("click" , ingresarConUsuario)
  logearse.appendChild(botonIngresar);

  // ingresarConUsuario(ingresarCorreo.value, ingresarClave.value).then(() => {
  //    changeRoute("#/wall");    
  //  });


  const parrafoRegistrar = document.createElement("p");
  parrafoRegistrar.innerHTML = "¿No tienes clave? Registrate <a href ='#/register'>aqui</a>";
  logearse.appendChild(parrafoRegistrar);

  const parrafoRecuperarClave = document.createElement("p");
  parrafoRecuperarClave.innerHTML = "¿Olvidaste tu clave? Recuperala <a href ='#/getPassword'>aqui</a>";
  logearse.appendChild(parrafoRecuperarClave);

  const sesionGoogle = document.createElement("p");
  sesionGoogle.textContent = "Inicia sesion con";
  logearse.appendChild(sesionGoogle);

  const botonGoogle = document.createElement("button");
  botonGoogle.innerHTML = "Login con Google";
  botonGoogle.addEventListener("click" , loginWithGoogle)
  
  logearse.appendChild(botonGoogle)

  return logearse;
};


