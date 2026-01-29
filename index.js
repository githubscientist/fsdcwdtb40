function getMeaning(word) {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

getMeaning('apple');