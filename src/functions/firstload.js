import header_div from "../pages/header";
import home from '../pages/home';

const first_load = function() {
    const content = document.querySelector('#content');
    const header = header_div();

    content.appendChild(header);
    home();
}

export default first_load;