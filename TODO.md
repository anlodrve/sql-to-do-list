TODO: 

DOCUMENT SET UP: 
    [x] Create HTML file 
    [x] add server folder
    [x] add server.js file
    [x] add public folder
    [x] add scripts folder
    [x] add client.js file
    [x] add client.js to html
    [x] add styles folder
    [x] create css file 
    [x] source css into html file
    [x] add vendors folder
    [x] Add jquery to vendors
    [x] Add jquery to html file
    [x] add routes folder (in server not in public)
    [x] add router.js file
    [x] add modules folder
    [x] add pool.js to modules
    [x] add .gitignore doc 
    [x] npm init --yes
    [x] npm install express 
    [x] add nodemodules to .gitignore (node_modules/)
    [x] npm install nodemon
    [x] add "start": "nodemon server/server.js", to scripts in json
    [x] npm install pg
    [x] set up .sql file

HTML HARD CODE
    [x] Add page title 
    [x] Add header 
    [x] Add title text
    [] Add input fields 
    [] Add table etc for tasks to display 


CODE SETUP IN ROUTER
    [x] const express = require('express');
    [x] const router = express.Router();
    [x] const pool = require('../modules/pool');
    [x] module.exports = router;

CODE SETUP IN SERVER
    [x] const express = require('express');
    [x] const bodyParser = require('body-parser');
    [x] const app = express();
    [x] app.use(bodyParser.urlencoded({extended: true}));
    [x] const **NAME OF VARIABLE**Router = require('./routes/**NAME OF FILE**.router.js');
    [x] app.use('/URL', **NAME OF VARIABLE**Router);
    [x] // Serve back static files by default
        app.use(express.static('server/public'))
    [x] // Start listening for requests on a specific port
        const PORT = process.env.PORT || 5000;
    [x] app.listen(PORT, () => {
            console.log('listening on port', PORT);
        });

CODE SETUP IN CLIENT
    [x] $(document).ready(function(){ });
    [x] event handlers function in onready
    [] add get function to onReady to have database data on page load


CODE SET UP IN POOL.JS
    [x] const pg = require('pg');
    [x] let pool = new pg.Pool({
        host: 'localhost',
        port: 5432,
        database: '***NAME OF DATABASE***', 
    [x] module.exports = pool;

DATABASE
    [x] create database in positico
    [x] create table in database
    [x] create sql to populate database with current inventory
    [x] Add code to SQL file in project

CLIENT SIDE
    [x] Create function with get request to get all data from database and call render 
        -GET ajax.then.catch codeblock
    [x] Create task object from input fields (.val) to send as data in POST request
    [x] Create post function to send new tasks to server/database
        - POST ajax.then.catch codeblock
        -.catch calls GET function 
    [] Create PUT function to update task to COMPLETE
        -.catch calls GET function 
    [x] Create DELETE function to delete task from DOM *AND* database 
    [x] Create render function and append changes to the DOM 
        [x] empty dom each time 
        [x] loop
    [] add event listeners for appended elements 

SERVER SIDE 
    [x] GET -- Link ajax Get from client to items from DB
            - [x] Create query text
                - [x] SELECT * FROM "tablename"
            - [x] call pool.queryText.then.catch code block
    [x] POST -- link ajax post from client send new items to DB
            - [x] Create query text
                - [x] Takes query text from ajax post.
                    [x] set variableName = req.body; then queryParams will be an array with attributes of variableName. parameter]
                    - [x] INSERT INTO "tablename" (...) VALUES ...
                    - [x] Use array with ($1 $2) to avoid injection
    [] PUT -- updates to tasks "Complete" 
            - [] Create query text
                - [] Takes query text from ajax PUT.
                    - [] UPDATE "tablename" SET "complete" = NOT "complete" WHERE "id" = $2
                    - [] Use array with ($1 $2) to avoid injection
                    - use "complete" = NOT "complete" to use button that can toggle
    [x] DELETE - delete task from DB 
            -[x] Create query text
                [x] takes request from ajax DELETE
                    [x] `DELETE FROM "tablename"
                        WHERE "id" = $1;`;
                    [x] set variable equal to  req.params.id;
                    [x] Use array with ($1 $2) to avoid injection


Create a Task - a post request to add the Task to the database

The Get request will display all the tasks on the Dom  

The Complete option will be a put request
The Delete option will be a delete request


Components of a Task: 
    Title: string
    Details: string
    Due Date: date
    Complete?: boolean
    (id that will be created by db)


