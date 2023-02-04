const express = require('express');
const tasksRouter = express.Router();
const pool = require('../public/modules/pool');


//GET serverside
tasksRouter.get("/", (req, res) => {
    let sqlQuery = `SELECT * FROM tasks
                    ORDER BY id ASC`;
    pool.query(sqlQuery)
    .then((dbRes) => {
        res.send(dbRes.rows);
      })
    .catch((err) => {
        console.log("Error Database failed", err);
        res.sendStatus(500);
      });
  });
  

//POST serverside
tasksRouter.post("/", (req, res) => {
    const newTask = req.body;
    
    const queryText = `
        INSERT INTO "tasks" ("title", "details", "dueDate", "completed")
        VALUES ($1, $2, $3, $4)`;

    const queryParams = [
        newTask.title,
        newTask.details,
        newTask.dueDate,
        newTask.completed,
        ];

    pool.query(queryText, queryParams)
    .then(() => {
        //created 
      res.sendStatus(201); 
    })
    .catch((err) => {
      console.log("error in server POST:", err);
      res.sendStatus(500);
    });
})

//DELETE serverside


//PUT serverside 








module.exports = tasksRouter;