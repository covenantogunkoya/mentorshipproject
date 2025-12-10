let tasks = []; // conatiner holding our task

document.getElementById("addBtn").addEventListener("click", addTask);
// getting the element with an id of addbtn and adding an event listener to click and call the function of add task

function addTask() {
  const input = document.getElementById("taskInput"); // getting access to the input
  const task = input.value; //carry the value in the input field

  // a validation checking if the user meets the required conditions

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  tasks.push(task); // push the task into the storing contianer
  input.value = ""; // clearing the input field after adding the task
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("taskList"); //getting access to the ul element with an id of taskList
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
       ${task}
       <div>
         <button onclick= "editTask(${index})">Edit</button>
         <button onclick = "deleteTask(${index})">Delete</button>
       </div>
      `;
    list.appendChild(li);
  });
}

function editTask(index) {
  const newTask = prompt("Edit your task covenant:", tasks[index]);
  if (newTask !== null && newTask !== "") {
    tasks[index] = newTask;
    displayTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}
