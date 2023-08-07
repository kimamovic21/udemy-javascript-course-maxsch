// 160. Styling DOM Elements

// via style property
// via className
// via classList

const section = document.querySelector('section');
console.log(section);
const button = document.querySelector('button');
console.log(button);

// section.style.backgroundColor = 'green';

// section.className = '';
// console.log(section.className);

section.className = 'red-bg';
console.log(section.className);

button.addEventListener('click', () => {
    console.log('click');
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // }
    // else{
    //     section.className = 'red bg visible';
    // };

    // section.classList.toggle('visible');
    section.classList.toggle('invisible');
});