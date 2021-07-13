const {sequelize, DataTypes, Model} = require('./db');

// Creates a restaurant Table in our database
class Restaurant extends Model {
	//add custom methods for advanced querying
}

// Create attributes (columns) for our model
Restaurant.init({
	name: DataTypes.STRING, 
    location: DataTypes.STRING
}, {
	sequelize, // What database is our table stored in
	// timestamps: false,
});

module.exports = { Restaurant }