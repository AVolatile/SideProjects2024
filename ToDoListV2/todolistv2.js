// Get the input box element by its ID
const inputBox = document.getElementById("input-box");
// Get the list container element by its ID
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        // Alert the user if no input was provided
        alert("You must write something!");
    } else {
        // Create a new list item element
        let li = document.createElement("li");
        // Set the inner HTML of the list item to the input box value
        li.innerHTML = inputBox.value;
        // Append the new list item to the list container
        listContainer.appendChild(li);
        
        // Create a new span element for the delete button
        let span = document.createElement("span");
        // Set the inner HTML of the span to the multiplication sign (×)
        span.innerHTML = "\u00d7";
        // Append the span (delete button) to the list item
        li.appendChild(span);
    }
    // Clear the input box
    inputBox.value = '';
    // Save the updated list to localStorage
    saveData();
}

// Add an event listener to the list container for click events
listContainer.addEventListener("click", function (e) {
    // Check if the clicked element is a list item
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class on the list item
        e.target.classList.toggle("checked");
        // Save the updated list to localStorage
        saveData();
    }
    // Check if the clicked element is a span (delete button)
    else if (e.target.tagName === "SPAN") {
        // Remove the parent list item of the span (delete the task)
        e.target.parentElement.remove();
        // Save the updated list to localStorage
        saveData();
    }
}, false);

// Function to save the list container's HTML to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to display the tasks from localStorage
function showTask() {
    // Get the saved tasks from localStorage and set it as the inner HTML of the list container
    listContainer.innerHTML = localStorage.getItem("data");
}

// Call showTask to display any saved tasks when the page loads
showTask();
