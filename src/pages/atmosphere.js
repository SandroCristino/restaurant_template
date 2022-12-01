
const atmosphere = function() {
    const content = document.getElementById('content');

        const first_container = document.createElement('div');
        first_container.id = 'atmosphere_container'
        first_container.textContent = 'Entrance With Love';
        first_container.classList.add('align-items-center')
            const first_container_left = document.createElement('div');
            first_container_left.id = 'atmosphere_outside';
        first_container.append(first_container_left);

        const second_container = document.createElement('div');
        second_container.id = 'atmosphere_container'
        second_container.classList.add('justify-content-end', 'align-items-center')
            const second_container_left = document.createElement('h2', 'py-4');
            second_container_left.innerHTML = '... And It Goes On Inside';
            second_container_left.classList.add('h2');
            second_container_left.id = 'atmosphere_insid';
            const second_container_right = document.createElement('div');
            second_container_right.id = 'atmosphere_inside';
        second_container.append(second_container_right, second_container_left);

        const third_container = document.createElement('div');
        third_container.innerHTML = 'Enjoy The Magic 🪄'
        third_container.classList.add('h2', 'py-4');

        const fourth_container = document.createElement('div')
        fourth_container.classList.add('d-flex');
        fourth_container.id ='atmosphere_container';
            const fourth_container_left = document.createElement('div');
            fourth_container_left.id = 'fourth_container_left'
            const fourth_container_right = document.createElement('div');
            fourth_container_right.id = 'fourth_container_right'
        fourth_container.append(fourth_container_left, fourth_container_right);

    content.append(first_container, second_container, third_container, fourth_container)

}

export default atmosphere;