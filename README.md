# Gusteaus

# About the application
 Gusteau's Table frontend is built purely on React and the backend server on Express for node


# Auth 
To signIn or signUp Gusteau's uses jsonwebtoken and for password hashing it uses bcrypt. 

## Backend
Database
![schema](https://user-images.githubusercontent.com/68914791/100596661-6ab59600-32ca-11eb-872e-8542b6fb53d9.png)

## Pages

### Splash Page
![landingPage](https://user-images.githubusercontent.com/68914791/100596148-d3e8d980-32c9-11eb-8f3d-f667d34a7f69.png)

![langingPage2](https://user-images.githubusercontent.com/68914791/100596555-4f4a8b00-32ca-11eb-99c3-97e530723d88.png)

## SignUp
![signup](https://user-images.githubusercontent.com/68914791/100596667-6b4e2c80-32ca-11eb-8ea9-db5cd59b2448.png)

## Login
![login](https://user-images.githubusercontent.com/68914791/100596902-b7996c80-32ca-11eb-82a4-38f686a2ad2d.png)

## Search
- The search uses a suggested search and as you type in letters it updates the results
![search](https://user-images.githubusercontent.com/68914791/100596665-6b4e2c80-32ca-11eb-98d3-58b801ee3b5e.png)

## Restaurant Display
![Screen Shot 2020-11-30 at 4 52 22 AM](https://user-images.githubusercontent.com/68914791/100596663-6ab59600-32ca-11eb-9099-f95a1cee728a.png)











## Development
Want to help me in my Adventure ?

## To fix a bug or add a feature, follow these steps:

- Fork the repository
- Create a new branch with git checkout -b feature-branch-name
- Create a Pull Request and Use a clear and descriptive title for the issue to identify the suggestion.
- Include any relevant issue numbers in the PR body, not the title.
- Provide a comprehensive description of all changes made.
## Setting Up and Starting a Local Server
- Download code and npm install to install all node dependencies
- Create a psql db user with createdb privileges.
- Duplicate the .env.example for the dotenv package.
### Update the following variables:
- PORT the port that the server will listen to, 8080 by default
- DB_USERNAME the user of the created psql db user
- DB_PASSWORD the password for the psql db user
- JWT_SECRET a session secret key for encrypting session id's in the database
### All other variables should remain the same
- Setup PostgreSQL database
- Run npx dotenv sequelize db:create
- Run npx dotenv sequelize db:migrate
- Run npx dotenv sequelize db:seed:all
- Start express server by running npm start in the root project directory
- The server will start on http://localhost:8080
