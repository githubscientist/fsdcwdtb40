async function getMeaning(word) {
    try {
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
        const data = await response.json();

        // get the paragraph
        const meaning = document.querySelector('#meaning');

        meaning.textContent = data[0].meanings[0].definitions[0].definition;
    } catch (error) {
        console.log(error);
    }
}

// getMeaning('apple');

// get the reference to the btnSubmit
const btnSubmit = document.querySelector('#btnSubmit');

// attach an event listener
btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    // get the reference of the wordInput -> input text box where the user
    // types the word to get the meaning
    const wordInput = document.querySelector('#wordInput');

    getMeaning(wordInput.value);
})