import express from 'express'; // Import the express module
import bodyParser from 'body-parser'; // Import the body-parser module


const app = express(); // Create an instance of the express module
const PORT = 3001; // Set the port number


app.use(bodyParser.json()); // Middleware to parse JSON requests

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`) // Start the server
);

