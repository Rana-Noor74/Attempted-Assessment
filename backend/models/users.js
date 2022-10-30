const Sequelize = require('sequelize');
const db = require("../utils/database");

const User = db.define("User_Profile", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    second_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    department: {
        type: Sequelize.STRING,
        allowNull: false
    },
    designation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tenant_id:{
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
    },
    image_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    social_links: {
        type: Sequelize.JSON,
        allowNull: false
    },
    employee_id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
    },

});

module.exports= User;