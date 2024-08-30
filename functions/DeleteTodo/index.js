const { sendResponse } = require('../../responses/index.js')

let todos = [
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

  const [deletedTodo] = todos.splice(id, 1);
  const message = `Entry ${id} with contents {'todo': '${deletedTodo.todo}', 'done': ${deletedTodo.done}} deleted`;

  return sendResponse(200, { message, deletedTodo });
};
