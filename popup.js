const displayJoke=document.querySelector('#joke');

async function fetchJokes() {
    let joke = '';
    const apiURL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        }
        else {
            joke = data.joke;
        }
        // console.log(joke);
        displayJoke.innerHTML=joke;
    } catch (error) {
        console.log('Failed to fetch Jokes from Joke API', error);
    }
}


fetchJokes();