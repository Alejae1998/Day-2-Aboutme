/* eslint-disable no-unused-vars */
// import functions

// grab DOM elements
const button = document.getElementById('show-more');
const list = document.getElementById('more');
button.onclick = function() {
    if (list.style.display !== 'none') {
        list.style.display = 'none';
    } else {
        list.style.display = 'block';
    }
};
const button2 = document.getElementById('show-animal');
const animal = document.getElementById('animal');
button2.onclick = function() {
    if (animal.style.display !== 'none') {
        animal.style.display = 'none';
    } else {
        animal.style.display = 'block';
    }
};        
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
