# Teledogter

Introduction
Teledogter is a modern veterinary telemedicine web application designed to bridge the gap between pet owners and veterinary services. With a focus on convenience and accessibility, Teledogter allows pet owners to schedule appointments, consult with veterinarians, and manage pet health online.

![image](https://github.com/bruleboy22/Teledogter/assets/135775265/eabed047-1f1a-4f0d-b457-9851d8377f0d)

# Features
- Appointment Scheduling: Book and manage appointments with ease.
- Virtual Consultations: Engage in video calls with veterinarians for remote consultations.
- Pet Health Management: Keep track of your pet's health records and appointment history. (Out of Scope Currently)

# Technical Details

# Dependencies: 
- Node.js & Express: For creating the server and handling API requests.
- MongoDB & Mongoose: For database management.
- Axios: For making HTTP requests.
- Bcryptjs: For hashing and securing passwords.
- Cors: To enable CORS (Cross-Origin Resource Sharing).
- Dotenv: For managing environment variables.
- Jsonwebtoken: For handling JWTs for secure authentication.
- Morgan: For HTTP request logging.
- Nodemon: For automatically restarting the server during development.

# Development Dependencies
- @types/bcryptjs: TypeScript definitions for Bcryptjs.

# Running the Application
- Installation:

* npm
* git clone  https://github.com/bruleboy22/Teledogter.git
* cd .\teledogter-app
* npm install



# Environment Setup:

* Create a .env file in the root directory.
* Add environment-specific variables:
* makefile
* DB_URI=<your_mongodb_uri>
* JWT_SECRET=<your_jwt_secret>


# Starting the Server:

* npm
* cd .\backend
* npm start
* Accessing the Application

# The application will be running at http://localhost:3000 (default port).

Thank you for viewing my Institute of Data capstone project.
