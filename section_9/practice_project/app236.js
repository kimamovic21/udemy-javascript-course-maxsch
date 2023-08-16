// 236. Getters & Setters

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

        const { info, ...otherProperties } = movie;
        console.log(info);
        console.log(otherProperties);

        let { getFormattedTitle } = movie;
        let text = getFormattedTitle.call(movie) + ' - ';

        for (const key in info) {
            console.log(key);
            console.log(info);
            console.log(info[key]);
            if (key !== 'title' && key !== '_title') {
                text = text + `${key}: ${info[key]}`;
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

    if (extraName.trim() === '' || extraValue === '') {
        return;
    };

    const newMovie = {
        info: {
            set title(value) {
                if (value.trim() === '') {
                    this._title = 'DEFAULT';
                    return;
                };
                this._title = value;
            },
            get title() {
                // return this._title.toUpperCase();
                return this._title;
            },
            [extraName]: extraValue,
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            console.log(this);
            return this.info.title.toUpperCase();
        },
    };

    newMovie.info.title = title;
    console.log(newMovie.info.title);

    movies.push(newMovie);
    console.log(movies);
    console.log(newMovie);

    renderMovies();
};

const searchMovieHandler = () => {
    console.log(this);
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieButton.addEventListener('click', addMovieHandler);
searchButton.addEventListener('click', searchMovieHandler);