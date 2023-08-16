// 220. Demo App & Shorthand Property Syntax

const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' || extraName.trim() === '' || extraValue === '') {
        return;
    };

    const newMovie = {
        info: {
            title: title,
            [extraName]: extraValue,
        },
        id: Math.random(),
    };

    movies.push(newMovie);
    console.log(newMovie);
};

addMovieButton.addEventListener('click', addMovieHandler);