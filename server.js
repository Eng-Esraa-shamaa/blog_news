const express = require('express');
const app = express();

// Serve static files (HTML, CSS, JS) from public
app.use(express.static('public'));

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
