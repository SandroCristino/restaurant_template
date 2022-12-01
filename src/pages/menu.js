const menu = function() {
    const content = document.getElementById('content');
        const first_container = document.createElement('div');
        first_container.classList.add('my-4', 'h2');
        first_container.innerHTML = 'Take A Look ⬇️'
        const second_container = document.createElement('div');
        second_container.id = 'menu_second_container';
    content.append(first_container,second_container)
}

export default menu;