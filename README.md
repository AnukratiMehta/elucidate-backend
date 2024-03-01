# Backend README (Node.js + Express)

## GitHub User Explorer Backend

Welcome to the GitHub User Explorer backend! This repository houses the backend code for the GitHub User Explorer app, implemented using Node.js and Express. This robust backend seamlessly complements the frontend, providing essential APIs to fetch GitHub user information and manage user data.

## Overview

The GitHub User Explorer backend functions as the backbone for the GitHub User Explorer app, offering critical APIs for fetching GitHub user information and handling user data. With an emphasis on reliability and performance, this backend ensures a smooth and efficient experience for users exploring GitHub profiles and repositories.

### Setup Instructions

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/elucidate-tech-backend.git
   cd elucidate-tech-backend
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

### Running the Server:

1. **Start the server:**

   ```
   node server.js
   ```

   The server will be running at http://localhost:3000.

### Endpoints:

- **Get Users:**
  - `GET /users` - Fetches a list of 10 users.

- **Get User Profile:**
  - `GET /users/<user_id>` - Returns profile information for a specific user using userID.

- **Delete User:**
  - `DELETE /users/<user_id>` - Removes a user based on their ID.

### Usage:

- Leverage [Postman](https://www.postman.com/) or any API testing tool to interact with the provided endpoints.

### Important Notes:

- The backend uses dummy data to populate responses from the APIs.

### Enhancements:

1. **Toggle Switch for Seamless Integration:**
   - The backend supports a seamless integration toggle with the [GitHub User Explorer app](https://github.com/AnukratiMehta/elucidate-tech).
   - UI enhancements have been implemented to support the backend integration.

### Screenshots:

[Github User Explorer](assets/Github%20User%20Explorer.mp4)

[Github Backend Server Explorer](assets/Github%20User%20Explorer%20-%20Backend.mp4)

### Remember
This app is optimized for Android, and the web version may not have all the supported features and styling. Please utilize Expo Android for optimal experience.
