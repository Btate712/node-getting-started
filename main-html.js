const html = `
  <html>
    <head><title>Main Page</title></head>
    <body>
      <h1>Welcome to my app!</h1>
      <form action="/create-user" method="POST">
        <label>
          New User: <br />
          Name: <input name="user-name" />
          Age: <input name="age" />
        </label>
        <button type="submit">Submit User</button>
      </form>
    </body>
  </html>  
`;

module.exports = html;
