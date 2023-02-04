// express and body parser stuff
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// router call
const tasksRouter = require('./routes/tasks.router.js');
app.use('/URL', tasksRouter);

//static files 
app.use(express.static('server/public'))

// port to listen on 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});