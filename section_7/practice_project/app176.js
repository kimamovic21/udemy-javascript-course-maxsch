// 176. Rendering Movie Items on the Screen

const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = document.querySelector('.btn--success');
const userInputs = document.querySelectorAll('input');
const movies = [];
const entryTextSection = document.getElementById('entry-text');
console.log(addMovieModal);
console.log(startAddMovieButton);
console.log(backdrop);
console.log(cancelAddMovieButton);
console.log(confirmAddMovieButton);
console.log(userInputs);
console.log(movies);
console.log(entryTextSection);

const updateUI = () => {
    if(movies.length === 0) {
        entryTextSection.style.display = 'block';
    } 
    else {
        entryTextSection.style.display = 'none';
    };
};

const renderNewMovieElement = (title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class='movie-element__image'>
            <img src='${imageUrl}' alt='${title}'> 
        </div>
        <div class='movie-element__info'>
            <h2>${title}</h2>
            <p>${rating}/5</p>
        </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        console.log(userInput.value);
        userInput.value = '';
    };
};

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
};

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' || 
        imageUrlValue.trim() === '' || 
        ratingValue.trim() === '' || 
        +ratingValue < 1 || 
        +ratingValue > 5
    ) {
        alert('You entered something wrong !');
        return;
    };

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    };
    console.log(newMovie);

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
    updateUI();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);