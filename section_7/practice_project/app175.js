// 175. Creating a Movie in Javascript & Clearing the Input

const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = document.querySelector('.btn--success');
const userInputs = document.querySelectorAll('input');
const movies = [];
console.log(addMovieModal);
console.log(startAddMovieButton);
console.log(backdrop);
console.log(cancelAddMovieButton);
console.log(confirmAddMovieButton);
console.log(userInputs);
console.log(movies);

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const clearMovieInput = () => {
    // userInputs[0].value = '';
    // userInputs[1].value = '';
    // userInputs[2].value = '';
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
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler)