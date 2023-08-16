// 223. Adding the Filter Functionality

const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    
    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    }
    else {
        movieList.classList.add('visible');
    };

    movieList.innerHTML = '';

    const filteredMovies = !filter ? movies : movies.filter((movie) => {
        return movie.info.title.includes(filter);
    });

    filteredMovies.forEach((movie) => {
        const movieElement = document.createElement('li');
        let text = movie.info.title + ' - ';
        for (const key in movie.info) {
            console.log(key);
            console.log(movie.info);
            console.log(movie.info[key]);
            if (key !== 'title') {
                text = text + `${key}: ${movie.info[key]}`;
            };
        };
        movieElement.textContent = text;
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

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    console.log('click');
    renderMovies(filterTerm);
};

addMovieButton.addEventListener('click', addMovieHandler);
searchButton.addEventListener('click', searchMovieHandler);