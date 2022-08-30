export const wall = () => {
    const muroPrinc = document.createElement("div");

    muroPrinc.className = "container-muroPrinc";
    // logearse.textContent = "este es el mainWall!";
    //console.log(logearse);

    const logoPrincipal = document.createElement("img");
    logoPrincipal.setAttribute("width", "200px");
    logoPrincipal.setAttribute("src", "./component/logo.jpg");
    muroPrinc.appendChild(logoPrincipal)

    return muroPrinc;
}