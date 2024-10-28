Node and Express API Application 

Description
This project is a RESTful API built with Node.js and Express, providing data management for users, posts, and comments. The project showcases practical use of middleware, routing, data manipulation, and templating with EJS.

Features
- **Custom Middleware**: Logging of request methods and URL, and adding custom headers.
- **Error-Handling Middleware**: Handles and logs server errors.
- **Data Categories**: Three data categories - Users, Posts, and Comments.
- **RESTful Routes**:
  - **GET**: Retrieve all entries for each data category and filter using query parameters.
  - **POST**: Allows creation of new entries.
  - **PATCH**: Enables updating entries.
  - **DELETE**: Supports entry deletion.
- **Query Parameters**: Filter data by `name`, `title`, and `postId`.
- **Route Parameters with Regular Expressions**: Allows finding users by name using regex.
- **Templating and Views**: EJS templates with simple CSS styles for `users` and `index` views.
- **Form Interaction**: Form on the main page to add new users via a POST request.

Installation
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the application: `npm run dev`
4. Access the server at `http://localhost:3001`

Dependencies
- **Express**: Web framework for Node.js.
- **Body-Parser**: Parses incoming JSON requests.
- **Validator**: Validates email format for user creation.
- **EJS**: Template engine for rendering views.

Structure
- **data/**: Contains JSON data files for users, posts, and comments.
- **views/**: EJS templates for displaying data and forms.
- **public/**: Static files, including CSS and images.

Usage
1. Navigate to `http://localhost:3001` to view the form.
2. Submit the form to add a user; view the updated user list at `/users-view`.
3. Access other data routes and query users, posts, and comments.


