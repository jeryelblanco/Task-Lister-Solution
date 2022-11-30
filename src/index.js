document.addEventListener("DOMContentLoaded", () => {
  //fetch all the elements from the page that you will be interacting with
  const form = document.getElementById("create-task-form");
  const taskToAdd = document.getElementById("new-task-description")
  //create priority task lists
  const highTaskList = document.createElement('ul')
  const mediumTaskList = document.createElement('ul')
  const lowTaskList = document.createElement('ul')
  //adds a list element to each prority level
  document.getElementById("high-priority").append(highTaskList)
  document.getElementById("medium-priority").append(mediumTaskList)
  document.getElementById("low-priority").append(lowTaskList)
  //create a vaiable that holdes the due date value
  let dueDate = document.getElementById('due-date').value
  //this adds your task to the list when you hit the sumbit button
  form.addEventListener('submit', (e) => {
    //prevent the page from reloading upon hitting the submit button
    e.preventDefault();
    //get the priorty level for the task
     priorityLevel = ((document.getElementById("priority")).value)
     //update the value for the due date
     dueDate = document.getElementById('due-date').value
    //check to see if something is writen in the box. If there is we call the addTaskToList function,
    //else send an alert that you need to add a task
    if(taskToAdd.value !== ``) {
      //check which list we should add out task too, then calls the function that adds it to that list
      if(priorityLevel === "high"){
      addTaskToList(highTaskList)
      }
      if(priorityLevel === "medium"){
      addTaskToList(mediumTaskList)
      }
      if(priorityLevel === "low"){
      addTaskToList(lowTaskList)
      }
    }
    else{
      alert('Please add a task')
    }
  })
  //function that adds our task an then clears the input box
  function addTaskToList (listToAddToo){
    newTask =  taskToAdd.value + " --- Due Date: " + dueDate + " ";
      const taskElement = document.createElement(`li`)
      taskElement.innerText = newTask
      listToAddToo.append(taskElement)
      //adds button to the end of the new task
      const btn = document.createElement('button')
      taskElement.append(btn)
      btn.innerText = (`X`)
      //adds and event lister to the the buttond so when you click it, it removes that element
      btn.addEventListener(`click`, () => {
        taskElement.remove();
      })
      //clears the input field when you hit submit
      taskToAdd.value = ""
  }
});
