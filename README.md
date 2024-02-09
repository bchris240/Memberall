#MemberAll

A simple note-taking application with Express.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## About

The Note Taker App is a web application built with Express.js that allows users to create, save, and delete notes.

## Features

- Create and save notes with a title and content.
- View a list of saved notes.
- Delete notes.

## Installation

1. Clone the repository:
   git clone https://github.com/bchris240/memberall.git

2. Navigate to the project directory
cd memberall

3. Install dependencies:
npm install

Usage:
To run the application, use the following command:
npm start

Visit http://localhost:3000 in your browser to access the application.

API Routes
GET /api/notes
Description: Retrieve all saved notes.
Example: curl http://localhost:3000/api/notes
POST /api/notes
Description: Save a new note.
Example: curl -X POST -H "Content-Type: application/json" -d '{"title": "New Note", "text": "Note content"}' http://localhost:3000/api/notes
DELETE /api/notes/:id
Description: Delete a note by ID.
Example: curl -X DELETE http://localhost:3000/api/notes/1


Technologies Used
Node.js
Express.js
Bootstrap
Other technologies...
Contributing
If you would like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch for your feature: git checkout -b feature-name
Commit your changes: git commit -m 'Add new feature'
Push to the branch: git push origin feature-name
Submit a pull request.
License
This project is licensed under the MIT License.
