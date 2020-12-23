const http = require("http");
const url = require("url");

const rqListener = (req, res) => {
  if (req.url === "/") {
    const mainHtml = require("./main-html");
    res.write(mainHtml);
    return res.end();
  } else if (req.url === "/users") {
    const users = require("./users-html");
    res.write(users);
    return res.end();
  } else if (req.url === "/create-user" && req.method === "POST") {
    const body = []
    res.statusCode = 302;
    res.setHeader('Location', '/');
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const name = parsedBody.split('&')[0].split('=')[1];
      const age = parsedBody.split('&')[1].split('=')[1];
      console.log(`New User: Name - ${name}, Age - ${age}.`);
      return res.end();
    });
  }
};

const server = http.createServer(rqListener);

server.listen(3000);