// 162. Adding Elements via HTML in Code

// const section = document.querySelector('section');
// console.log(section);
// console.log(section.textContent);

// section.textContent = 'New Content!';
// console.log(section.textContent);

// section.innerHTML = '<h2>A new Title!</h2>';
// console.log(section.innerHTML);


const list = document.querySelector('ul');
console.log(list);
list.innerHTML += '<li>Item 4 JS</li>';
console.log(list);

const div = document.querySelector('div');
console.log(div);
div.innerHTML += '<p>Something went wrong!</p>';
console.log(div.innerHTML);
div.insertAdjacentHTML('beforeend', '<p>Something went wrong 2!');
console.log(div.insertAdjacentHTML);