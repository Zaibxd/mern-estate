# Starting off the project

# Creating client folder
1)npm create vite@latest client

# Install dependencies
1)Go to client folder 
2)npm i / npm install

# Install tailwind (Go to official tailwind css site and paste the given commands inside client folder)

# Adding project to GitHub repository (do this in root not client side of server side)
1)git init (Initialize)
2)git add . / git add all (Adding all the files inside our application)
3)git commit -m "your message"
4)After making the repository on GitHub follow the commands these commands of that repo 
(…or push an existing repository from the command line)


# Creating pages and routes

# Install react-router-dom inside client side
1)npm i react-router-dom

# Pushing code in repo from vs code
1)Open source control
2)click the '+' icon on save changes bar on top
3)After that click commit or from dropdown select commit and push.

# Creating Header section

# Install react icons to use 
1)npm i react-icons (stay inside client folder)

# Create and run the server
1)Create 'api' folder inside the main folder 'mern-estate'
2)Get inside main folder 'mern-estate' on terminal and write the following command for package.json 'npm init -y'
3)Create index.js inside 'api' folder, because we have '"main": "index.js",' inside package.json

# Install express
1)Get inside 'mern-estate' and install express on terminal with following command 'npm i express'
2)Add "type": "module", under "main": "index.js", inside (mern-estate->package.json)

# Running the server
1)mern-estate->node api/index.js

# Install nodemon for automatically restarting server whenever changes are made
1)mern-estate->npm i nodemon 

# Adding nodemon to package.json
1)mern-estate->package.json file (not on terminal)
2)make changes in this -> "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
3)replace with -> "scripts": {
    "dev": "nodemon api/index.js",
    "start": "node api/index.js"
  },

# To run server with nodemon now
1)npm run dev

# Connect to database
1)Install mongoose inside root folder 'mern-estate' ->>npm i mongoose
2)create cluster on mongodb and after that go to 'connect->driver->copy link' 
3)paste that link inside api/index.js -> mongoose.connect.

# Instll dotenv in root to ensure url stays hidden
1)npm i dotenv
2)env should not be pushed to git, so write it at the end of gitignore before commiting.

# creating user model (using mongoose)

# creating a test API route

# creating sign-up API route

# Install bcryptjs for hashing password
1)npm i bcryptjs
