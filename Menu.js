const {sequelize, DataTypes, Model} = require('./db');

// Create a menu Table
class Menu extends Model {}


// Create attributes for menu model
Menu.init({
	name : DataTypes.STRING,
	price: DataTypes.INTEGER
}, {
	sequelize
})


module.exports = { Menu } 