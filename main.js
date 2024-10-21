"use strict";
let toggleButton = document.getElementById('nav-toggle'); // Correct the ID here
let links = document.getElementById('list')?.querySelector('ul'); // Select the ul inside #list
toggleButton?.addEventListener('click', () => {
    links?.classList.toggle('active'); // Toggle the class 'active' on the ul element
});
