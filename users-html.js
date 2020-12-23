const users = require("./dummy-users");

let html = "<html><head><title>Users</title></head><body><h1>Users:</h1><ul>";

users.forEach((user, index) => {
  html += "<li>"
  html += `User #${index + 1}: ${user.name}<br />`;
  html += `Age: ${user.age} <br /><br /></li>`;
});

html += "</ul></body></html>";

module.exports = html;