
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
    $(document).on('click', '.completeButton', markComplete);
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

function formatDate(){

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
function deleteTask(event) {
    swal({
        title: "Are you sure you want to delete this task?",
        text: "Once it's gone, it's gone forever! 😿",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Your task is toast! 🍞", {
            icon: "success",
          });
        } else {
          swal("Your task was not deleted.");
        }
      });

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
function markComplete(event) {
    event.preventDefault();
    console.log('in put on client')
    let id = $(this).parents("div").data("id");
    const checked = $(this).is(":checked");

console.log(id, checked);
    $.ajax({
      method: "PUT",
      url: `/tasks/${id}`,
      data: {complete: checked}
    })
      .then(() => {
        getTask();
      })
      .catch((err) => {
        console.log("PUT failed", err);
      });
}


// render 
// Input is an array
function renderTasks (tasks) {
 $('#addedTaskList').empty();

    console.log('in render');
for(let task of tasks) {
    let checkedVariable = '';
    const dateConvert = new Date(task.due_date).toLocaleDateString(`en-us`, { weekday:`long`, year:`numeric`, month:`short`, day:`numeric`});

    if(task.complete){
        checkedVariable = "checked"
    }
    
 $('#addedTaskList').append(`
    <div class="taskContainer ${checkedVariable}" data-id=${task.id} data-completed=${task.complete}>
        <input type="checkbox" id="${task.id}" class="completeButton" name="completeCheck" ${checkedVariable}/>
        <button class="deleteButton">❌</button> 
        <div class="taskList" id="taskTitle">${task.title}</div>
        <div class="taskList" id="taskDetails">${task.details}</div>
        <div class="taskList" id="taskDueDate">Due: ${dateConvert}</div>
    </div> 
     `)
};
}