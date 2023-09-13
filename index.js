const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write("Hello world !!!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server started on 3000 host");
});
