export const register = () => {
    const registrarse = document.createElement("div");

    registrarse.className = "container-register";
    // logearse.textContent = "este es el register!";
    //console.log(logearse);

    const logoPrincipal = document.createElement("img");
    logoPrincipal.setAttribute("width", "200px");
    logoPrincipal.setAttribute("src", "./component/logo.jpg");
    registrarse.appendChild(logoPrincipal)

    const tituloUno = document.createElement("h1");
    tituloUno.textContent = "Registrarse";
    registrarse.appendChild(tituloUno);

    const ingresarNombre = document.createElement("input");
    ingresarNombre.setAttribute("placeholder", "Nombre");
    registrarse.appendChild(ingresarNombre);

    const ingresarMail = document.createElement("input");
    ingresarMail.setAttribute("placeholder", "E-mail");
    registrarse.appendChild(ingresarMail);

    const ingresarContraseñaNueva = document.createElement("input");
    ingresarContraseñaNueva.setAttribute("placeholder", "Contraseña");
    registrarse.appendChild(ingresarContraseñaNueva);

    // const genero = document.createElement("h1");
    // genero.textContent = "Genero de tu Gato";
    // logearse.appendChild(genero);

    const botonRegistrarse = document.createElement("button");
    botonRegistrarse.innerHTML = "Registrarse";
    registrarse.appendChild(botonRegistrarse);

    const sesionGoogle = document.createElement("h1");
    sesionGoogle.textContent = "O resgistrate con";
    registrarse.appendChild(sesionGoogle);
  
    const imagenGoogle = document.createElement("img");
    imagenGoogle.setAttribute("width", "50px");
    imagenGoogle.setAttribute("src", "./component/ggoogle.jpg");
    registrarse.appendChild(imagenGoogle)

    return registrarse;
}