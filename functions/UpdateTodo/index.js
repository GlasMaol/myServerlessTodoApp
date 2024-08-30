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

  //converts the id (which is a string) into a number in order to ba able to access the array.
  const index = parseInt(id);

  if(isNaN(index) || index < 0 || index > todos.length) {
    return sendResponse(404, { message: `Todo with id ${id} not found.` });
  }

  //todos[index] accesses the todo item at the SPECIFIC index
  todos[index] = {
    ...todos[index],

    //Updates property if new value provided. If no new propertly provided the old value is kept.
    todo: todo !== undefined ? todo : todos[index].todo,
    done: done !== undefined ? done : todos[index].done
  }

  return sendResponse(200, { message: `Todo with id ${id} updated.`, updatedTodo: todos[index] });
};
