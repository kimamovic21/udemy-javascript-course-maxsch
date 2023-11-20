// 369. Sending a GET Request

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://jsonplaceholder.typicode.com/posts`);

xhr.send();