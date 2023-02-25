//your code here
const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

// Get the ordered list element where we will add the todo items
const todoList = document.getElementById("todoList");

// Add event listener to the Add todo button
addTodoBtn.addEventListener("click", () => {
  // Get the value of the input field
  const todoText = newTodoInput.value.trim();

  // Check if the input field is not empty
  if (todoText !== "") {
    // Create a new list item element
    const newTodoItem = document.createElement("li");

    // Add the todo item text to the new list item element
    newTodoItem.textContent = todoText;

    // Add the new list item to the todo list
    todoList.appendChild(newTodoItem);

    // Clear the input field
    newTodoInput.value = "";
  }
});
