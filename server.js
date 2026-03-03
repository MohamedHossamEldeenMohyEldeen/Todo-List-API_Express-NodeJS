import express from 'express';
import tasks from './routes/tasks.js'

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());

// JSON pretter
app.set('json spaces', 2);

// Routes
app.use('/api/todo', tasks);

app.listen(PORT, () => 
{
  console.log(`Server Started On Port ${PORT}`);
})