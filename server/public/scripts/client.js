$(document).ready(function(){
    //event listener function call
    eventListeners();

    //show existing data on page load
    getTask();
 });
   
function eventListeners () {
    console.log('in event listener function');
    $('#addTaskButton').on('click', postTask);
    $(document).on('click', '.deleteButton', deleteTask);
 };

// get function
function getTask() {
    console.log('in getTask function'); 
    // ajax.then.catch
    $.ajax({
        type: "GET",
        url: "/tasks",
      })
        .then((response) => {
          console.log(response);
          renderTasks(response);
        })
        .catch((err) => {
          console.log("error in GET", err);
        });
}

// post function
function postTask() {
// create the object to post 
    const taskObject = {
        title: $('#titleIn').val(),
        details: $('#detailsIn').val(), 
        due_date: $('#dueDateIn').val(),
        complete: $('#completeIn').val(),
    }
    console.log('in postTask, heres the task:', taskObject);
// ajax.then.catch
    $.ajax({
        type: "POST",
        url: "/tasks",
        data: taskObject,
      })
        .then(function (response) {
          console.log("Response from server in post", response);
          getTask();
        })
        .catch((err) => {
          console.log("POST error", err);
        });
}


// delete function
function deleteTask() {
    let id = $(this).parents('div').data('id')

    $.ajax({
        method: 'DELETE',
        url: `/tasks/${id}`
    })
    .then(() => {
      getTask();
      console.log('delete successful');
    })
    .catch((err) => {
        console.log('DELETE failed');
    })
}



// put function
function markComplete() {
    let id = $(this).parents("div").data("id");
    let markedComplete = $(this).parents("tr").data("isCompleted");
    $.ajax({
      method: "PUT",
      url: `/tasks/${id}`,
      data: markedComplete,
    })
      .then(() => {
        getTask();
      })
      .catch((err) => {
        console.log("PUT failed", err);
      });
  }
}


// render 
// Input is an array
function renderTasks (tasks) {
 $('#addedTaskList').empty();

    console.log('in render');
for(let i = 0; i < tasks.length; i += 1) {
 $('#addedTaskList').append(`
        <div class="taskContainer" data-id=${tasks[i].id} data-isCompleted=${tasks[i].complete}>
           <div class="taskList" id="taskTitle">${tasks[i].title}</div>
           <div class="taskList" id="taskDetails">${tasks[i].details}</div>
           <div class="taskList" id="taskDueDate">Due: ${tasks[i].due_date}</div>
           <div class="taskList" id="taskComplete"> Completed? ${tasks[i].complete}</div>
           <button class="deleteButton">Delete Task</button>
        </div> 
     `)
    }
};