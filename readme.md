# Rental Car Task

## Prerequisites
Make sure you have the following installed:

- Node.js 
- npm 

## Installation

1. Clone the repository to your local machine

## Running the Application

### Navigate to the `src` directory

1. From the root of your project (`carRental`), navigate to the `src` directory:
    ```
    cd src
    ```

### Start the application

2. Once you’re in the `src` directory, run the application using `nodemon`:
    ```
    nodemon index.js
    ```

    The application should now be running at `http://localhost:3000`

## HTTP Methods to Test

### 1. **POST Request** - Register a new user
- **Endpoint**: `/register`
- **Method**: `POST`
- **Description**: This will register a new user.
- **Request Body** (example JSON):
    ```json
    {
      "fullName": "FilanFisteku",
      "userName": "FF123",
      "email": "filani@gmail.com",
      "password": "t3st"
    }
    ```

    Example command:
    ```
    POST http://localhost:3000/register
    Content-Type: application/json

    {
      "fullName": "FilanFisteku",
      "userName": "FF123",
      "email": "filani@gmail.com",
      "password": "t3st"
    }
    ```

### 2. **POST Request** - Login and receive JWT token
- **Endpoint**: `/login`
- **Method**: `POST`
- **Description**: This will log the user in and return a JWT token.
- **Request Body** (example JSON):
    ```json
    {
      "email": "filani@gmail.com",
      "password": "t3st"
    }
    ```

    Example command:
    ```
    POST http://localhost:3000/login
    Content-Type: application/json

    {
      "email": "filani@gmail.com",
      "password": "t3st"
    }
    ```

### 3. **GET Request** - Get the user's profile (requires auth)
- **Endpoint**: `/my-profile`
- **Method**: `GET`
- **Description**: This will retrieve the authenticated user's profile.
- **Authorization**: You need to pass the JWT token obtained from `/login` in the `Authorization` header as a Bearer token.
  
    Example command:
    ```
    GET http://localhost:3000/my-profile
    Authorization: Bearer <your-jwt-token>
    ```

### 4. **POST Request** - Add a new car to the inventory
- **Endpoint**: `/add-car`
- **Method**: `POST`
- **Description**: This will add a new car to the inventory.
- **Request Body** (example JSON):
    ```json
    {
      "name": "Toyota",
      "price_per_day": "35.0",
      "year": 2022,
      "color": "blue",
      "steering_type":"automatic",
      "number_of_seats":5
    }
    ```

    Example command:
    ```
    POST http://localhost:3000/add-car
    Content-Type: application/json

    {
      "name": "Toyota",
      "price_per_day": "35.0",
      "year": 2022,
      "color": "blue",
      "steering_type":"automatic",
      "number_of_seats":5
    }
    ```

### 5. **GET Request** - Retrieve all rental cars
- **Endpoint**: `/rental-cars`
- **Method**: `GET`
- **Description**: This will retrieve a list of all rental cars available, sorted from lowest to highest price. You can also filter the cars by various attributes like year, color, steering type, and number of seats.

- **Query Parameters**:
    - `color` (optional): Filter cars by color.
    - `year` (optional): Filter cars by year.
    - `steering_type` (optional): Filter cars by steering type (e.g., automatic or manual).
    - `number_of_seats` (optional): Filter cars by the number of seats.

- **Example**:
    To retrieve cars sorted by price (lowest to highest):
    ```
    GET http://localhost:3000/rental-cars
    ```

    To filter cars by color (e.g., blue):
    ```
    GET http://localhost:3000/rental-cars?color=blue
    ```

    To filter cars by year (e.g., 2022):
    ```
    GET http://localhost:3000/rental-cars?year=2022
    ```

    To filter cars by steering type (e.g., left) and number of seats (e.g., 5):
    ```
    GET http://localhost:3000/rental-cars?steering_type=automatic&number_of_seats=5
    ```

    The cars will be returned sorted by price in ascending order.

    ```

---