async function getMeaning(word) {
    const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
    const data = await response.json();
    console.log(data);
}

getMeaning('apple');