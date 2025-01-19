// Wait until the DOM is fully loaded before running the code
document.addEventListener("DOMContentLoaded", () => {
  // Get references to input, button, and list elements
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); // var tasktext...taskInput.value gets the text entered in the input box. trim removes extra spaces

    // Check if the input is empty
    if (taskText === "") {
      alert("Please enter a task.");
      return; // Stop the function if the input is empty
    }

    // Create a new list item (li) for the task
    const taskItem = document.createElement("li");

    // new li banne ke bad usme dala hua text (.textcontent) tasktext me save hoga
    taskItem.textContent = taskText;  



     // Add the "Mark Completed" functionality
     taskItem.addEventListener("click", () => {
      taskItem.classList.toggle("completed"); // Toggle the "completed" class
    });

    

    // Create a delete button for the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"; // Button pe likha hua 'delete' text
    deleteButton.className = "delete-button"; // Add a class for styling

    // Add a click event to the delete button to remove the task
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(taskItem); // Remove the task item from the list
    });

    // Add the delete button to the task item
    taskItem.appendChild(deleteButton);

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Clear the input box after adding the task
    taskInput.value = "";
  });
});
