//DOM Selections
const addItem = document.querySelector('.add-item');
const container = document.querySelector('.container');
//Event listeners
addItem.addEventListener('click', addNewItem);
//Functions
function addNewItem(e) {
    e.preventDefault();
    console.log('Created new div');

    const addItemDiv = document.createElement('div');
    addItemDiv.classList.add('addItemDiv');
    container.appendChild(addItemDiv);
}