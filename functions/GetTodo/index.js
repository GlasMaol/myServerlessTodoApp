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

  return sendResponse(200, todos[parseInt(id)]);
};
