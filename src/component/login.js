export const login = () => {
  const logearse = document.createElement("div");  

  logearse.className = "container-login";
  // logearse.textContent = "este es el login!";
  //console.log(logearse);

  const logoPrincipal = document.createElement("img");
  logoPrincipal.setAttribute("width", "200px");
  logoPrincipal.setAttribute("src", "./component/logo.jpg");
  logearse.appendChild(logoPrincipal)

  const tituloUno = document.createElement("h1");
  tituloUno.textContent = "Comparte tus experiencias gatunas!!";
  logearse.appendChild(tituloUno);

  const ingresarCorreo = document.createElement("input");
  ingresarCorreo.setAttribute("placeholder", "E-mail");
  logearse.appendChild(ingresarCorreo);

  const ingresarClave = document.createElement("input");
  ingresarClave.setAttribute("placeholder", "E-mail");
  logearse.appendChild(ingresarClave);

  const botonIngresar = document.createElement("button");
  botonIngresar.innerHTML = "Ingresar";
  logearse.appendChild(botonIngresar);

  const parrafoRegistrar = document.createElement("h1");
  parrafoRegistrar.textContent = "¿No tienes clave? Registrate aqui";
  logearse.appendChild(parrafoRegistrar);

  const parrafoRecuperarClave = document.createElement("h1");
  parrafoRecuperarClave.textContent = "¿Olvidaste tu clave? Recuperala aqui";
  logearse.appendChild(parrafoRecuperarClave);

  const sesionGoogle = document.createElement("h1");
  sesionGoogle.textContent = "Inicia sesion con";
  logearse.appendChild(sesionGoogle);

  const imagenGoogle = document.createElement("img");
  imagenGoogle.setAttribute("width", "50px");
  imagenGoogle.setAttribute("src", "./component/ggoogle.jpg");
  logearse.appendChild(imagenGoogle)

  return logearse;
};


