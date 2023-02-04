$(document).ready(function(){
    //event listener function call
    eventListeners();

    //show existing data on page load
    getTask
 });
   
function eventListeners () {
    console.log('in event listener function')
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
        dueDate: $('#dueDateIn').val(),
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

// put function

// render 
function renderTasks () {
    console.log('in render');
}