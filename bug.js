const http = require('http');

const server = http.createServer((req, res) => {
  // Without this check, the server will crash if a non-JSON request is made
  if (req.headers['content-type'] !== 'application/json') {
    res.writeHead(415, { 'Content-Type': 'text/plain' });
    res.end('Unsupported Media Type');
    return;
  }

  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      // Accessing data.name without checking causes error if 'name' is missing
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: `Hello, ${data.name}!` }));
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid JSON');
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});