// select the button
const fetchTodosButton = document.getElementById('fetchTodosButton');
const todoBlock = document.getElementById('todoBlock');

const fetchTodos = () => {
    // 1. create an instance of the XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // 2. Open a connection to the API endpoint
    xhr.open('GET', 'https://698dd177b79d1c928ed6a345.mockapi.io/todos');

    // 3. Set up a callback function to handle the response (onload)
    xhr.onload = () => {
        const response = JSON.parse(xhr.responseText);

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
    }

    // 4. send the request to the server
    xhr.send();
}

// attach an event listener to the button
fetchTodosButton
    .addEventListener('click', fetchTodos);