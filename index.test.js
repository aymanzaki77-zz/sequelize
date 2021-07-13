const {sequelize} = require("./db");

const {Restaurant, Menu} = require("./index") // pull them from index, where we make our association

// const {Band} = require('./Band') //why is this bad? Because our Band doesn't have an association here!

//Destructuring Syntax
// const {banana} = require('./fruit')

// const banana = require('./fruit').banana

describe('Restaurant Database', () => {

	beforeAll(async () => {
		await sequelize.sync({force: true})
	})

	test('can create a restaurant', async() => {
		const testRestaurant = await Restaurant.create({name : 'Bayroot'})
		expect(testRestaurant.name).toBe('Bayroot')
	})

	test('restaurant location', async () => {
		const testRestaurant = await Restaurant.create({name: 'Bayroot', location : 'East village NYC'});
		expect(testRestaurant.location).toBe('East village NYC');
	})

	test('can create a menu', async () => {
		const testMenu = await Menu.create({name :"Lamb Parcels"})
		expect(testMenu.name).toBe("Lamb Parcels")
	})

	test('menu have a price', async() => {
		const testMenu = await Menu.create({name : "Lamb Parcels", price : 10})
		expect(testMenu.price).toBe(10)
	})

	test('menu can have many item', async () => {
		const addItem = await Menu.create({name : 'Meat Balls', price : 12})

		const BUFFALOMOZZARELLA = await Menu.create({name :'BUFFALO MOZZARELLA', price : 8});
		const BABYGEMSALAD = await Menu.create({name:'BABY GEM SALAD', price : 9 });
		const Falafel = await Menu.create({name :'Falafel', price : 6});

		await addItem.addMenu(BUFFALOMOZZARELLA) //addMenu is a 'magic method' we get from Sequelize, once we declare an association
		await addItem.addMenu(BABYGEMSALAD)
		await addItem.addMenu(Falafel)

		const resaurant = await BTS.addItem() // another association 'magic method'

		expect(menu.length).toBe(5)
		expect(menu[0] instanceof Menu).toBeTruthy

	})

	

})