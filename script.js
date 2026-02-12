// select the button
const fetchTodosButton = document.getElementById('fetchTodosButton');
const todoBlock = document.getElementById('todoBlock');

const fetchTodos = () => {
    fetch('https://698dd177b79d1c928ed6a345.mockapi.io/todos')
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            // create a header element
            const header = document.createElement('h1');

            header.textContent = 'Todos';

            // create a unordered list
            const ul = document.createElement('ul');

            for (let i = 0; i < response.length; i++) {
                const li = document.createElement('li');

                li.textContent = response[i].title;

                ul.appendChild(li);
            }

            todoBlock.append(header, ul);
        })
}

// attach an event listener to the button
fetchTodosButton
    .addEventListener('click', fetchTodos);