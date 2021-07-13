const {sequelize, DataTypes, Model} = require('./db');

const { Restaurant } = require('./Restaurant');
const { Menu } = require('./Menu');


//Create our Association!
Menu.belongsTo(Restaurant) //adds a foreign key on the musician table, for the band they belong to
Restaurant.hasMany(Menu) //gives us Sequelize magic methods

module.exports = { Restaurant, Menu }; // make sure we export our models with the associations added!