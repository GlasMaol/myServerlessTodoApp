const { sendResponse } = require('../../responses/index.js')

const todos = [
  {
    "todo": "Wash car",
    "done": false
  },
  {
    "todo": "Clip grass",
    "done": false
  },
  {
    "todo": "Go to Systemet",
    "done": false
  },
  {
    "todo": "Make coffee",
    "done": false
  },

]

exports.handler = async (event) => {
  const {id} = event.pathParameters;
  const { todo, done } = JSON.parse(event.body);

  const index = parseInt(id);

  if(isNaN(index) || index < 0 || index > todos.length) {
    return sendResponse(404, { message: `Todo with id ${id} not found.` });
  }

  todos[index] = {
    ...todos[index],
    todo: todo !== undefined ? todo : todos[index].todo,
    done: done !== undefined ? done : todos[index].done
  }

  return sendResponse(200, { message: `Todo with id ${id} updated.`, updatedTodo: todos[index] });
};
