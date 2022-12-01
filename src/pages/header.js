const header_div = function() {
    const header = document.createElement('div')
    header.id = 'header';

    header.classList.add('navbar', 'bg-light', 'p-3')

        //Left header
        const header_left_div = document.createElement('div')
            const header_left_text = document.createElement('h1')
            header_left_text.innerHTML = 'Sandy Burgers';
            header_left_div.appendChild(header_left_text)
        
        const header_right_div = document.createElement('div');
        header_right_div.classList.add('d-flex');
        header.appendChild(header_right_div);
            const restaurant_btn = document.createElement('p');
            restaurant_btn.innerHTML = 'Home';
            restaurant_btn.classList.add('btn');
            restaurant_btn.id = 'home_btn';
            const atmosphere_btn = document.createElement('p');
            atmosphere_btn.innerHTML = 'Atmosphere';
            atmosphere_btn.classList.add('btn');
            atmosphere_btn.id = 'atmosphere_btn';
            const menu_btn = document.createElement('p');
            menu_btn.innerHTML = 'Menu';
            menu_btn.classList.add('btn');
            menu_btn.id = 'menu_btn';
            const contact_btn = document.createElement('p')
            contact_btn.innerHTML = 'Contact';
            contact_btn.classList.add('btn');
            contact_btn.id = 'contact_btn';

            header_right_div.append(restaurant_btn, atmosphere_btn, menu_btn, contact_btn);
    
    header.append(header_left_div, header_right_div)
    return header;
}

export default header_div;