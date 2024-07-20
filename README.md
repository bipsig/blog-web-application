# Blog Application

A simple blog application built using Express.js that allows users to create, update, view, and delete blog posts.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Future Scope](#future-scope)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This blog application provides a platform to create and manage blog posts. Users can create new blogs, update existing ones, view the list of blogs, view details of a specific blog, and delete blogs.

## Features
- Create new blog posts
- View list of all blog posts
- View details of a specific blog post
- Update existing blog posts
- Delete blog posts
- Custom 404 page for invalid routes

## Technologies Used
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [Morgan](https://github.com/expressjs/morgan)
- [Body-Parser](https://github.com/expressjs/body-parser)

## Prerequisites
- Node.js (v12.x or higher)
- npm (v6.x or higher)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/blog-application.git
    ```
2. Navigate to the project directory:
    ```bash
    cd blog-application
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Running the Application
1. Start the server:
    ```bash
    npm start
    ```
2. Open your browser and go to `http://localhost:3000` to see the application in action.

## API Endpoints
- `GET /` - View the list of all blog posts
- `GET /blog:id` - View details of a specific blog post
- `GET /create-blog` - View the form to create a new blog post
- `POST /create-blog` - Create a new blog post
- `POST /delete-blog:id` - Delete a specific blog post
- `GET /update-blog:id` - View the form to update a specific blog post
- `POST /update-blog:id` - Update a specific blog post
- `ALL *` - Custom 404 page for invalid routes

## Future Scope
- Implement user authentication and authorization
- Add comments section for each blog post
- Implement a rating and review system
- Add search functionality with advanced filters and sorting options

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
