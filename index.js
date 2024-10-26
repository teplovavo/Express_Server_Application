import express from 'express'; // Import the express module
import bodyParser from 'body-parser'; // Import the body-parser module

// Import data from files in the data folder
import users from './data/users.js';
import posts from './data/posts.js';
import comments from './data/comments.js';

const app = express(); // Create an instance of the express module
const PORT = 3001; // Set the port number

app.use(bodyParser.json()); // Middleware to parse JSON requests

// Custom middleware to log request method and URL
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next(); // Move to the next middleware or route handler
});

// Custom middleware to simulate adding a header to all responses
app.use((req, res, next) => {
  res.setHeader('X-Custom-Header', 'This is a custom header');
  next(); // Move to the next middleware or route handler
});

app.get('/', (req, res) => {
  console.log('[TEST]');  // Log a message
  res.send('Hello from homepage!'); // Send a response to the client
});

//--------------------GET Routes for all data categories--------------------------------------------------

// GET all users
app.get('/users', (req, res) => {
  res.json(users); // Send back all users as JSON
});

// GET all posts
app.get('/posts', (req, res) => {
  res.json(posts); // Send back all posts as JSON
});

// GET all comments
app.get('/comments', (req, res) => {
  res.json(comments); // Send back all comments as JSON
});

//--------------------POST Routes for adding data--------------------------------------------------

// POST a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1; // Simple id generation
  users.push(newUser); // Add new user to the array
  res.status(201).json(newUser); // Send back the new user
});

// POST a new post
app.post('/posts', (req, res) => {
  const newPost = req.body;
  newPost.id = posts.length + 1;
  posts.push(newPost);
  res.status(201).json(newPost);
});

// POST a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  newComment.id = comments.length + 1;
  comments.push(newComment);
  res.status(201).json(newComment);
});

//--------------------PATCH/PUT Routes for updating data--------------------------------------------------

// PATCH (update) a user by ID
app.patch('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    res.json(users[userIndex]); // Send the updated user back
  } else {
    res.status(404).send('User not found');
  }
});

// PATCH (update) a post by ID
app.patch('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const updatedPost = req.body;
  const postIndex = posts.findIndex(post => post.id === postId);

  if (postIndex !== -1) {
    posts[postIndex] = { ...posts[postIndex], ...updatedPost };
    res.json(posts[postIndex]); // Send the updated post back
  } else {
    res.status(404).send('Post not found');
  }
});

// PATCH (update) a comment by ID
app.patch('/comments/:id', (req, res) => {
  const commentId = parseInt(req.params.id);
  const updatedComment = req.body;
  const commentIndex = comments.findIndex(comment => comment.id === commentId);

  if (commentIndex !== -1) {
    comments[commentIndex] = { ...comments[commentIndex], ...updatedComment };
    res.json(comments[commentIndex]); // Send the updated comment back
  } else {
    res.status(404).send('Comment not found');
  }
});

//--------------------DELETE Routes for deleting data--------------------------------------------------

// DELETE a user by ID
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1);
    res.json(deletedUser); // Send the deleted user back
  } else {
    res.status(404).send('User not found');
  }
});

// DELETE a post by ID
app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(post => post.id === postId);

  if (postIndex !== -1) {
    const deletedPost = posts.splice(postIndex, 1);
    res.json(deletedPost); // Send the deleted post back
  } else {
    res.status(404).send('Post not found');
  }
});

// DELETE a comment by ID
app.delete('/comments/:id', (req, res) => {
  const commentId = parseInt(req.params.id);
  const commentIndex = comments.findIndex(comment => comment.id === commentId);

  if (commentIndex !== -1) {
    const deletedComment = comments.splice(commentIndex, 1);
    res.json(deletedComment); // Send the deleted comment back
  } else {
    res.status(404).send('Comment not found');
  }
});

//--------------------middleware for error handling--------------------------------------------------

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log error stack to the console
  res.status(500).send('Something broke!'); // Send a 500 error response
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)); // Start the server




//---------------------------filters--------------------------------------------------

// GET filtered users by name
app.get('/users', (req, res) => {
  const { name } = req.query;
  if (name) {
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
    res.json(filteredUsers); // Send filtered users
  } else {
    res.json(users); // Send all users if no query is provided
  }
});

// GET filtered posts by title
app.get('/posts', (req, res) => {
  const { title } = req.query;
  if (title) {
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(title.toLowerCase()));
    res.json(filteredPosts); // Send filtered posts
  } else {
    res.json(posts); // Send all posts if no query is provided
  }
});

// GET filtered comments by postId
app.get('/comments', (req, res) => {
  const { postId } = req.query;
  if (postId) {
    const filteredComments = comments.filter(comment => comment.postId === parseInt(postId));
    res.json(filteredComments); // Send filtered comments
  } else {
    res.json(comments); // Send all comments if no query is provided
  }
});



//////////////////////////////////////////express ejs template engine////////////////////////////////////////
// Set EJS as the template engine
app.set('view engine', 'ejs');




