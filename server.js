const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, '/dist/hello-world')));

const port = process.env.PORT || 9576;

// Start the app by listening on the default Heroku port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
