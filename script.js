
// Create Input field
const newItemInput = document.createElement('input');
newItemInput.type = 'text';
newItemInput.placeholder = 'Enter a new item';

// Create "Add Item" button
const addItemButton = document.createElement('button');
addItemButton.textContent = 'Add Item';

// Create "Generate Random Paragraph" button
const generateParagraphButton = document.createElement('button');
generateParagraphButton.textContent = 'Generate Random Paragraph';

// Create "Remove List" button
const removeListButton = document.createElement('button');
removeListButton.textContent = 'Remove List';

// Create List to display items
const itemList = document.createElement('ul');

// Create Div to display the random paragraph
const randomParagraphElement = document.createElement('div');

// Append the dynamically created elements to the body of the document
document.body.appendChild(newItemInput);
document.body.appendChild(addItemButton);
document.body.appendChild(generateParagraphButton);
document.body.appendChild(removeListButton);
document.body.appendChild(itemList);
document.body.appendChild(randomParagraphElement);

// Array of random paragraphs
const randomParagraphs = [
    "This is a random paragraph.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Pellentesque ac ante nec nunc scelerisque rhoncus.",
    "Suspendisse potenti. Nulla euismod lacus ac tortor fringilla, sit amet sollicitudin turpis tincidunt.",
    "Vestibulum quis sapien nec nulla bibendum aliquam.",
];

// Add click event listeners
addItemButton.addEventListener('click', addItem);
generateParagraphButton.addEventListener('click', generateRandomParagraph);
removeListButton.addEventListener('click', removeList);

function addItem() {
    const newItemText = newItemInput.value.trim();

    if (newItemText === '') {
        alert('Please enter a valid item.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<span>${newItemText}</span>`;
    itemList.appendChild(li);
    newItemInput.value = '';

    // Create a "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');
    li.appendChild(removeButton);

    // Add a click event listener to the "Remove" button
    removeButton.addEventListener('click', removeItem);
}

function removeItem(event) {
    const li = event.target.parentElement;
    itemList.removeChild(li);
}

function generateRandomParagraph() {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * randomParagraphs.length);
    const randomText = randomParagraphs[randomIndex];
    randomParagraphElement.textContent = randomText;
}

function removeList() {
    // Remove all list items
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    // Remove the random paragraph
    randomParagraphElement.textContent = '';
}
