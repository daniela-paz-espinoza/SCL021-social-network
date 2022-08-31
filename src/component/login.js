export const login = () => {
  const logearse = document.createElement("div");  

  logearse.className = "container-login";
  // logearse.textContent = "este es el login!";
  //console.log(logearse);

  const logoPrincipal = document.createElement("img");
  logoPrincipal.setAttribute("width", "200px");
  logoPrincipal.setAttribute("src", "./component/gatonuevo.jpg");
  logearse.appendChild(logoPrincipal)

  const tituloUno = document.createElement("h1");
  tituloUno.textContent = "Comparte tus experiencias gatunas!!";
  //tituloUno.setAttribute = ("class", "titulo-register");
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
  botonIngresar.innerHTML = "Ingresar";
  logearse.appendChild(botonIngresar);

  const parrafoRegistrar = document.createElement("p");
  parrafoRegistrar.innerHTML = "¿No tienes clave? Registrate <a href ='#/register'>aqui</a>";
  logearse.appendChild(parrafoRegistrar);

  const parrafoRecuperarClave = document.createElement("p");
  parrafoRecuperarClave.textContent = "¿Olvidaste tu clave? Recuperala aqui";
  logearse.appendChild(parrafoRecuperarClave);

  const sesionGoogle = document.createElement("p");
  sesionGoogle.textContent = "Inicia sesion con";
  logearse.appendChild(sesionGoogle);

  const imagenGoogle = document.createElement("img");
  imagenGoogle.setAttribute("width", "20px");
  imagenGoogle.setAttribute("src", "./component/gootrans.jpg");
  logearse.appendChild(imagenGoogle)

  return logearse;
};


