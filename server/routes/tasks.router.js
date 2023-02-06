const express = require('express');
const tasksRouter = express.Router();
const pool = require('../public/modules/pool');


//GET serverside
tasksRouter.get("/", (req, res) => {
    let sqlQuery = 
        `SELECT * FROM tasks
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
    
    const queryText = 
        `INSERT INTO "tasks" ("title", "details", "due_date", "complete")
        VALUES ($1, $2, $3, $4)`;

    const queryParams = [
        newTask.title,
        newTask.details,
        newTask.due_date,
        newTask.complete,
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
tasksRouter.delete('/:id', (req, res) => {
    console.log('in delete on server');
    const queryText = 
          `DELETE FROM "tasks"
          WHERE id = $1;`;

    const queryParams = [req.params.id];
    pool.query(queryText, queryParams)
    .then((dbRes) => {
        res.sendStatus(204);
    })
    .catch((err) => {
      console.log('error in DELETE on server failed', err);
      res.sendStatus(500); 
    })
})


//PUT serverside 
tasksRouter.put("/:id", (req, res) => {
    console.log("in put on server");
  
    const queryText = `
          UPDATE tasks
          SET complete = $1
          WHERE id = $2
          `;
    const queryParams = [req.body.complete, req.params.id];
    pool.query(queryText, queryParams)
    .then((dbRes) => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.log("error in server PUT:", err);
      });
  });

module.exports = tasksRouter;