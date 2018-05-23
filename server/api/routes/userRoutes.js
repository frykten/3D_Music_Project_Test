'use strict';

let mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    jwt = require("jsonwebtoken"),
    User = mongoose.model('User'),
	Instr = require('../models/instrModel'),
	Brand = require('../models/brandModel');

module.exports = (app) => {
    let userApi = require('../controllers/userController.js');

    app.route('/').get((req, res) => { res.status(200).json({ message: "connected" }); });

    app.route('/users')
        .get(userApi.getUsers)
        .post(userApi.postUser);
    
	app.route('/instr')
        .get((req, res) => {
			return new Promise((resolve, reject) => {
				Instr.find({}, (err, instr) => {
					if (err)
						reject(err);
					resolve(instr);
				});
			}).then((instrs) => {
				res.json(instrs);
			}).catch((error) => {
				res.status(400).send(error);
			})
		})
		.post((req, res) => {
			var new_instr = new Instr(req.body);
			return new Promise((resolve, reject) => {
				new_instr.save((err, instr) => {
					if (err)
						reject(err);
					resolve(instr);
				});
			}).then((instr) => {
				res.json(instr);
			}).catch((error) => {
				res.status(400).send(error);
			})
		});
	
	app.route('/brands')
        .get((req, res) => {
			return new Promise(function(resolve, reject) {
				Brand.find({}, function(err, brand) {
					if (err)
						reject(err);
					resolve(brand);
				});
			})
			.then(function(brands){
				res.json(brands);
			},function(error){
				res.status(400).send(error);
			})
		})
		.post((req, res) => {
			var new_brand = new Brand(req.body);
			return new Promise(function(resolve, reject) {
				new_brand.save(function(err, brand) {
					if (err)
						reject(err);
					resolve(brand);
				});
			})
			.then(function(brand){
				res.json(brand);
			},function(error){
				res.status(400).send(error);
			})
		});

    app.route("/user/:id")
        .get(userApi.getUser)
        .delete(userApi.deleteUser)
        .put(userApi.putUser);

    app.route('/auth/users')
        .get(userApi.loginRequired, userApi.getUsers);

//        .post(userApi.login);
    app.route('/login')
		.post((req, res) => {
			let body = req.body;
		
			if (!body.username || !body.password)
				return res.status(401).json({ message: 'Authentication failed. Username or password is empty' });
			
			return new Promise(function(resolve, reject) {
				User.findOne({username: body.username}, function(err, user) {
					if (err)
						reject(err);
					resolve(user);
				});
			}).then((user) => {
				console.log(user.comparePassword(body.password));
				
				if (!user.comparePassword(body.password))
            		res.status(401).json({ message: 'Authentication failed. Wrong password.' });
				else
					res.json(user);
			}).catch((err) => {
				res.status(400).json({ message: 'Authentication failed. User not found.' });
			});
		})

	// Registering a new user, sends errors if Email or Username already exists
	app.route('/register')
		.post((req, res) => {
			let body = req.body;

			var newUser = new User(body);
			return new Promise((resolve, reject) => {
				newUser.save((err, user) => {
					if (err)
						reject(err);
					resolve(user);
				});
			}).then((user) => {
				res.json(user);
			}).catch((err) => {
				res.status(400).send(err);
			});
		});
};
