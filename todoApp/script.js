// Access the DOM elements that will interact with the user: the button for adding items,
// the input field for user entry, the ordered list where items will be displayed,
// and the button to delete all list items.
let button = document.getElementById('buttonAddList');
let input = document.getElementById('input');
let olList = document.getElementById('list');
let deleteList = document.getElementById('Delete');

// Define a Person class to encapsulate the concept of a person with a name.
// This class could be extended later with more properties or methods if needed.
class Person {
    constructor(name) {
        this.name = name;
    }
}

// Listen for click events on the 'Add' button which indicates the user's intention to add a new item.
button.addEventListener('click', function addToList() {
    // Remove any leading or trailing whitespace from the input value to ensure clean data.
    let inputName = input.value.trim();
    
    // Check if the input field is not empty to prevent adding empty or just whitespace names.
    if (inputName === '') {
        // Exit the function early if no name is entered, providing a basic form of input validation.
        return;
    } else {
        // Construct a new Person instance using the cleaned input name.
        let person = new Person(inputName);

        // Create a new list item (li) element to hold the individual entry in the ordered list (ol).
        let listItem = document.createElement('li');

        // Generate a checkbox input to allow interaction with the list item (e.g., marking as done).
        let checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        // Assign a unique ID to each checkbox by concatenating 'myCheck-' with the person's name.
        // This assumes person names are unique which may not be the case in a real-world scenario.
        checkBox.id = 'myCheck-' + inputName;

        // Append the checkbox to the list item, making it part of the list visually and structurally.
        listItem.appendChild(checkBox);

        // Create a label element associated with the checkbox.
        // Labels provide accessible text for screen readers and improve usability by increasing the clickable area.
        let label = document.createElement('label');
        label.htmlFor = checkBox.id; // The 'for' attribute links the label to the checkbox ID.
        // Append a text node with the person's name to the label element.
        label.appendChild(document.createTextNode(person.name));

        // Append the label to the list item to keep the checkbox and label text together.
        listItem.appendChild(label);

        // Finally, append the fully constructed list item to the ordered list, making it part of the DOM.
        olList.appendChild(listItem);
    }
});

// Listen for click events on the 'Delete' button to handle the action of clearing the list.
Delete.addEventListener('click', function deleteList() {
    // Set the inner HTML of the ordered list to an empty string, removing all child elements (list items).
    olList.innerHTML = '';
    // Note: This is a quick way to clear the list, but it doesn't handle any potential memory leaks or
    // references that might have been established if event listeners were added to the list items.
});

// The 'error' function is declared as a placeholder for potential error handling logic.
// In a production application, you might have more robust error handling here.
function error() {
    // Placeholder for error handling code. This could be expanded to log errors or display error messages to the user.
}
