export const createNewPAss = () => {
    const crearNuevaContraseña = document.createElement("div");

    crearNuevaContraseña.className = "container-createNewPasword";
    // logearse.textContent = "este es el createNewPassword!";
    //console.log(logearse);

const tituloUno = document.createElement("h1");
    tituloUno.textContent = "Crea tu nueva contraseña";
    crearNuevaContraseña.appendChild(tituloUno);

    const nuevoPass = document.createElement("input");
    mailRecuperar.setAttribute("placeholder", "Nueva Contraseña");
    crearNuevaContraseña.appendChild(nuevoPass);

    const repNuevoPass = document.createElement("input");
    mailRecuperar.setAttribute("placeholder", "Reingresa Nueva Contraseña");
    crearNuevaContraseña.appendChild(repNuevoPass);

    const botonNuevoPass = document.createElement("button");
    botonNuevoPass.innerHTML = "Crear Nueva Contraseña";
    botonNuevoPass.appendChild(botonRegistrarse);

    return crearNuevaContraseña;
};