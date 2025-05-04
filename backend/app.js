const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Node backend is up and running.");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
