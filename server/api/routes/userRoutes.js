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
			return new Promise(function(resolve, reject) {
				Instr.find({}, function(err, instr) {
					if (err)
						reject(err);
					resolve(instr);
				});
			})
			.then(function(instrs){
				res.json(instrs);
			},function(error){
				res.status(400).send(error);
			})
		})
		.post((req, res) => {
			var new_instr = new Instr(req.body);
			return new Promise(function(resolve, reject) {
				new_instr.save(function(err, instr) {
					if (err)
						reject(err);
					resolve(instr);
				});
			})
			.then(function(instr){
				res.json(instr);
			},function(error){
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
        .get(userApi.loginRequired, userApi.getUsers)

    app.route('/login')
        .post(userApi.login);
};
