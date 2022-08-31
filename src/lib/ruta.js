import { login } from '../component/login.js';
import { register } from '../component/register.js';
// import { getPassword } from '../component/getPassword.js';
// import { createNewPass } from '../component/createNewPass.js';
// import { loginGoogle } from '../component/loginGoogle.js';
// import { wall } from '../component/wall.js';

export const changeRoute = (hash) => {
    const rootContainer = document.getElementById("root");
    rootContainer.innerHTML = '';
    // si el hash es #/register entonces le hago appendChild del componente register
    
    if(hash === '#/register'){
        rootContainer.appendChild(register())
    }
}