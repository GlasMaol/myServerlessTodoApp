const { sendResponse } = require("../../responses/index.js");

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
  return sendResponse(200, todos);
};
