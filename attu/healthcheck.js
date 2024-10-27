const http = require('http');

http.get('http://localhost:3000/api/v1/healthy', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  resp.on('end', () => {
    process.exit(0);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
  process.exit(1);
});