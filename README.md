# Auxilium
Capstone project repo for the GL-DN-March'21 batch. 
Contributors:
1] Bhargavi Upadhye
2] Irvin Kaur Chawla
3] Minaiy Talati
4] Siddharth Chakraborty

# Project Meta
The project is focused around connecting the resource provider to the person in need.
The project will create a platform that will allow the resource provider to broadcast the resources available to them and allow the requirement holder to look for the resources they need.
The project will use dummy data during the development process.

# Repo Usage Details
Do not clone the main project, the other folders feel free.
For the main project folder, make branches and after the completion of the module, merge it into the main branch

# npm packages used
1] react-bootstrap
2] bootstrap
3] @material-ui/core
4] axios
5] typewriter-effect
6] framer-motion
7] http-proxy-middleware

# npm packages installation string
inside the "auxilium_ui" folder: 
    npm install react-bootstrap bootstrap axios @material-ui/core typewriter-effect framer-motion http-proxy-middleware
inside the "Auxilium_UI" folder:
    npm install body-parser cookie-parser express node-mailer --save
    npm install concurrently nodemon --save-dev

# Project running steps
1] Clone the project
2] traverse to "Auxilium_DB_Backup" and restore the latest DB backup available.
3] traverse to "Auxilium_API/Auxilium_API" and open the Auxilium_API.sln file in VS. Edit your connection string accordingly and run the project.
4] traverse to "Auxilium_UI" and enter "npm run dev" in the command window opened there.