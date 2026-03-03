import express from 'express';

const router = express.Router();

let tasks = [
  {
    id: 1,
    title: 'First Task',
    task: 'Programming'
  },
  {
    id: 2,
    title: 'Second Task',
    task: 'Coding'
  },
  {
    id: 3,
    title: 'Thierd Task',
    task: 'Playing Games'
  }
];

// Utilits
const findTaskById = (id) => 
{
  return tasks.find(task => task.id === parseInt(id));
};

// GET Method
router.get('/', (req, res) =>
  {
    res.send(tasks);
    res.end();
  });

// GET Method by ID
router.get('/:id', (req, res) => 
  {
    const task = findTaskById(req.params.id);

    res.send(task);
  });

// POST Method
router.post('/', (req, res) =>
  {
    tasks.push({
      id: tasks.length + 1,
      title: req.body.title,
      task: req.body.task
    });

    console.log(tasks);
    res.end();
  });

// PUT Method
router.put('/:id', (req, res) => 
  {
    const task = findTaskById(req.params.id);

    task.title = req.body.title;
    task.task = req.body.task;

    console.log(tasks);
    res.end(JSON.stringify(task));
  });

// DELETE Method
router.delete('/:id', (req, res) =>
  {
    const task = findTaskById(req.params.id);
    const index = tasks.findIndex(task => task.id === parseInt(req.params.id));

    tasks.splice(index, 1);
    console.log(tasks);

    res.end(JSON.stringify({ "task removed": task }));
  });

export default router;