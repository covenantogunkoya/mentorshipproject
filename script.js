let tasks = []; // conatiner holding our task 

document.getElementById("addBtn").addEventListener("click", addTask);
// getting the element with an id of addbtn and adding an event listener to click and call the function of add task 

function addTask() {  
    const input = document.getElementById("taskInput"); // getting access to the input 
    const task = input.value; //carry the value in the input field 

    // a validation checking if the user meets the required conditions

    if (task === "") {
        alert("Please enter a task.");
    }


    tasks.push(task); // push the task into the storing contianer
    input.value = ""; // clearing the input field after adding the task
}