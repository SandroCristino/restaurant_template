

const home = function() {
    const content = document.getElementById('content');
    content.classList.add('py-4', 'text-center');
        const first_container = document.createElement('div');
        first_container.classList.add('container', 'pt-5');

            const first_container_h2 = document.createElement('h2');
            first_container_h2.classList.add('pb-4');
            first_container_h2.innerHTML = 'Welcome To Sandy Burgers. A Happy Place For Everyone'
            const first_container_p = document.createElement('p');
            first_container_p.innerHTML = ' "It is the best ingredients. The spiciest spices. All prepared with loving care! And always delivered with a friendly smile. That is the Sandy Burgers promise." ';

            first_container.append(first_container_h2, first_container_p);
            const second_container = document.createElement('div');
            second_container.id = 'burger_container';



    content.append(first_container, second_container)
}

export default home;



