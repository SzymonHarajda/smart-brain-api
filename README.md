# Smart Brain API

This is the backend API for the Smart Brain web application. Smart Brain is a face detection application that allows users to detect faces in images by providing a URL to the image. This API is responsible for handling user authentication, image processing, and database interactions.

## Features

- **User Authentication**: Provides endpoints for user registration, login, and authentication using JWT tokens.
- **Image Processing**: Offers endpoints for handling image uploads and processing using Clarifai API for face detection.
- **Database Interaction**: Interacts with the PostgreSQL database to store user information and image data.

## Technologies Used

- **Node.js**: JavaScript runtime environment for building server-side applications.
- **Express.js**: Web application framework for Node.js used for building RESTful APIs.
- **PostgreSQL**: Open-source relational database management system used for data storage.
- **Clarifai API**: Used for face detection in images.

## Installation

1. Clone the repository:

git clone https://github.com/SzymonHarajda/smart-brain-api.git

2. Install dependencies:

npm install


3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Define the following environment variables:
     ```
     PORT=3001
     DATABASE_URL=your_database_url
     CLARIFAI_API_KEY=your_clarifai_api_key
     JWT_SECRET=your_jwt_secret
     ```

4. Run the application:

npm start


5. Access the API at `http://localhost:3001`.

## API Endpoints

- **POST /register**: Register a new user.
- **POST /signin**: Sign in with existing credentials and receive a JWT token.
- **GET /profile/:id**: Get user profile information.
- **PUT /image**: Update user's image count.
- **POST /imageurl**: Detect faces in an image from a provided URL.

## Contributors

- [Your Name](https://github.com/SzymonHarajda)

## License

This project is licensed under the [MIT License](LICENSE).



