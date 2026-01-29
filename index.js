async function getMeaning(word) {
    try {
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// getMeaning('apple');

// get the reference to the btnSubmit
const btnSubmit = document.querySelector('#btnSubmit');

// attach an event listener
btnSubmit.addEventListener('click', () => {
    console.log('button clicked');
})