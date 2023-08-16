// 231. The "this" Keyword And Its Strange Behaviour

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

        // const { title: movieTitle } = info;
        let { getFormattedTitle } = movie;
        getFormattedTitle = getFormattedTitle.bind(movie);
        let text = getFormattedTitle() + ' - ';
        
        for (const key in info) {
            console.log(key);
            console.log(info);
            console.log(info[key]);
            if (key !== 'title') {
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

    if (title.trim() === '' || extraName.trim() === '' || extraValue === '') {
        return;
    };

    const newMovie = {
        info: {
            title: title,
            [extraName]: extraValue,
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            console.log(this);
            return this.info.title.toUpperCase();
        },
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