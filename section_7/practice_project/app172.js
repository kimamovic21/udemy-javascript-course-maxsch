// 172. Opening a Modal by Changing CSS Classes

const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
console.log(addMovieModal);
console.log(startAddMovieButton);

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
};

startAddMovieButton.addEventListener('click', toggleMovieModal);