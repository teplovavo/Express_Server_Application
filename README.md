Node and Express API Application  localhost:3001

## Description
This project is a RESTful API built with Node.js and Express, providing data management for users, posts, and comments. The application demonstrates the use of custom middleware, error handling, data manipulation, and templating with EJS.

---

## Requirements and Implementation

1. **Create and use at least two pieces of custom middleware**
   - **Implementation**: Two middleware functions are added to log request methods and URLs, and to add a custom header to all responses.

2. **Create and use error-handling middleware**
   - **Implementation**: A custom error-handling middleware logs error stacks and returns a 500 error message if an issue occurs.

3. **Use at least three different data categories (e.g., users, posts, or comments)**
   - **Implementation**: Three data categories—`users`, `posts`, and `comments`—are structured as separate files in the `data` directory.

4. **Utilize reasonable data structuring practices**
   - **Implementation**: Data for each category is stored in separate files and imported into `index.js` for easy management and access.

5. **Create GET routes for all data that should be exposed to the client**
   - **Implementation**: GET routes are provided for `users`, `posts`, and `comments` to retrieve data for each category.

6. **Create POST routes for data, as appropriate. At least one data category should allow for client creation via a POST request**
   - **Implementation**: POST routes are implemented for each category, allowing the client to add new entries to `users`, `posts`, and `comments`.

7. **Create PATCH or PUT routes for data, as appropriate. At least one data category should allow for client manipulation via a PATCH or PUT request**
   - **Implementation**: PATCH routes are created for all categories (`users`, `posts`, and `comments`) to enable updating of existing entries.

8. **Create DELETE routes for data, as appropriate. At least one data category should allow for client deletion via a DELETE request**
   - **Implementation**: DELETE routes are set up for all categories, allowing client requests to delete `users`, `posts`, or `comments`.

9. **Include query parameters for data filtering, where appropriate. At least one data category should allow for additional filtering through the use of query parameters**
   - **Implementation**: Query parameters are implemented for filtering `users` by `name`, `posts` by `title`, and `comments` by `postId`.

10. **Utilize route parameters, where appropriate**
    - **Implementation**: Route parameters with regular expressions allow for searching `users` by name, matching only alphabetic characters.

11. **Adhere to the guiding principles of REST**
    - **Implementation**: The application uses RESTful principles with dedicated routes for each action, such as retrieving, creating, updating, and deleting data.

12. **Create and render at least one view using a view template and template engine. This can be a custom template engine or a third-party engine**
    - **Implementation**: EJS templates are used to render views for `users` and `index` pages.

13. **Use simple CSS to style the rendered views**
    - **Implementation**: Simple CSS styles are applied to EJS templates, enhancing the visual presentation without complexity.

14. **Include a form within a rendered view that allows for interaction with your RESTful API**
    - **Implementation**: A form on the main page allows users to submit their name and email, which is sent to the API to create a new user entry.

15. **Utilize reasonable code organization practices**
    - **Implementation**: Code is organized by category with data files in the `data` directory, templates in the `views` directory, and static assets in the `public` directory.

16. **Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit)**
    - **Implementation**: The application has been tested to ensure error-free execution.

17. **Commit frequently to the git repository**
    - **Implementation**: Code is committed regularly, ensuring a detailed commit history.

18. **Include a README file that contains a description of your application**
    - **Implementation**: This README file provides a comprehensive overview of the application’s features, requirements, and usage.

19. **Level of effort displayed in creativity, presentation, and user experience**
    - **Implementation**: The application includes a user-friendly interface with visually appealing styles, and the functionality exceeds the minimum requirements.

---

## Additional Requirements and Implementation

1. **Include a practical usage of regular expressions within route paths**
   - **Implementation**: A route with a regular expression is used to search `users` by name, allowing only alphabetic characters.

2. **Research and effectively use at least one third-party Node package for practical, sensible purposes**
   - **Implementation**: The `validator` package is used to validate email input when creating a new user, ensuring only valid emails are accepted.

---

## Installation

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the application: `npm run dev`
4. Access the server at `http://localhost:3001`

