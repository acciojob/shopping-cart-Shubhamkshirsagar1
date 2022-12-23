//your code here
const itemInput = document.getElementById('item-name-input');
const priceInput = document.getElementById('item-price-input');
const addButton = document.getElementById('add');
const itemsTable = document.getElementById('items');
const totalElement = document.getElementById('total');

let total = 0;

addButton.addEventListener('click', () => {
    const itemName = itemInput.value;
    const itemPrice = priceInput.value;

    if (itemName.trim() === '' || itemPrice <= 0) {
        // Invalid input, do nothing
        return;
    }

    // Add the item to the table
    const row = document.createElement('tr');
    row.innerHTML = `
    <td role="row" id="item">${itemName}</td>
    <td role="row" id="price">${itemPrice}</td>
  `;
    itemsTable.appendChild(row);

    // Update the total
    total += parseInt(itemPrice, 10);
    totalElement.innerHTML = `Total: ${total}`;

    // Clear the input fields
    itemInput.value = '';
    priceInput.value = '';
});
