let fruits = ["Apple", "Banana", "Orange", "Mango", "Grape", "Strawberry", "Pineapple", "Peach", "Pear", "Plum", "Cherry"];

const h1 = document.createElement('h1');
h1.textContent = "List of Fruits";

const ul = document.createElement('ul');

fruits.forEach(fruit => {
    const li = document.createElement('li');
    li.textContent = fruit;

    ul.appendChild(li);
})

document.body.append(h1, ul);