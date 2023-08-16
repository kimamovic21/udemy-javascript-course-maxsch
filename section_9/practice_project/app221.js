// 221. Rendering Elements based on Objects

const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
    const movieList = document.getElementById('movie-list');
    
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    }
    else {
        movieList.classList.add('visible');
    };

    movieList.innerHTML = '';

    movies.forEach((movie) => {
        const movieElement = document.createElement('li');
        movieElement.textContent = movie.info.title;
        movieList.append(movieElement);
    });
};

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

    renderMovies();
};

addMovieButton.addEventListener('click', addMovieHandler);