export const logo = () => {
  const logoPrincipal = document.createElement("img");
  logoPrincipal.setAttribute("width", "200px");
  logoPrincipal.setAttribute("src", "./component/logo.jpg");
  return logoPrincipal;  
};

export const titulo = () => {
  const tituloUno = document.createElement("h1");
  tituloUno.textContent = "Comparte tus experiencias gatunas!!";
  return tituloUno;
};

export const loginCorreo = () => {
  const ingresarCorreo = document.createElement("input");
  ingresarCorreo.setAttribute("placeholder", "E-mail");
  return ingresarCorreo;
};

export const loginClave = () => {
  const ingresarClave = document.createElement("input");
  ingresarClave.setAttribute("placeholder", "Contraseña");
  return ingresarClave;
};

export const btnIngresar = () => {
  const botonIngresar = document.createElement("button");
  botonIngresar.innerHTML = "Ingresar";
  return botonIngresar;

};

export const fraseRegistro = () => {
  const parrafoRegistrar = document.createElement("h1");
  parrafoRegistrar.textContent = "¿No tienes clave? Registrate aqui";
  return parrafoRegistrar;
};

export const fraseRecuperarClave = () => {
  const parrafoRecuperarClave = document.createElement("h1");
  parrafoRecuperarClave.textContent = "¿Olvidaste tu clave? Recuperala aqui";
  return parrafoRecuperarClave;
};

export const iniciarSesionGoogle = () => {
  const sesionGoogle = document.createElement("h1");
  sesionGoogle .textContent = "Inicia sesion con";
  return sesionGoogle ;
};

export const fotoGoogle = () => {
  const imagenGoogle = document.createElement("img");
  imagenGoogle.setAttribute("width", "50px");
  imagenGoogle.setAttribute("src", "./component/ggoogle.jpg");
  return imagenGoogle;
};