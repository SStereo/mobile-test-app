const inputTitle = document.querySelector('#title');
const inputQuantity = document.querySelector('#quantity');
const btnSave = document.querySelector('#btn-save');
const btnDelete = document.querySelector('#btn-delete');
const lstInventory = document.querySelector('#inventory');
const elNumberItems = document.querySelector('#numberItems');

let numberItems = 0;

const clear = () => {
    inputTitle.value = '';
    inputQuantity.value = '';
}

btnSave.addEventListener('click', () => {
    console.log('saved');
    const title = inputTitle.value;
    const quantity = inputQuantity.value;

    if (
        title.trim().length <= 0 ||
        quantity <= 0 ||
        quantity.trim().length <= 0
    ) {
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = title + ' ' + quantity;
    lstInventory.appendChild(newItem);
    numberItems ++;
    elNumberItems.textContent = numberItems;

    clear();

    console.log(title, quantity);
})

btnDelete.addEventListener('click', clear);