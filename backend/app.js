//Requiring the modules, variable and files that are used in the app.js file.
const express = require('express');
const app = express();
const sequelize = require('./utils/database');
const User = require('./models/users')
const port = process.env.EXTERNAL_PORT || 3000;


//including the express middleware like json cookieParser and multer etc.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting headers
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

//importing routes file
app.use('/dev', require('./routes/routes'));
app.use('/users', require('./routes/users'));

//listening server on port
(async ()=>{
    try {
        await sequelize.sync(
            { force: false }
        );
        app.listen(port, () => {
            console.log(`Our app is listening on port ${port}!`); 
        });
    } catch (error) {
        console.log(error.message);
    };
})();

