const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

//Database
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
	useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected', () => {
	console.log('Mongoose connection is open');
});

db.error('error', err => {
	console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected', () => {
	console.log('Mongoose default connection is disconnected');
	
});

process.on('SIGINT', () => {
	db.close(() => {
		console.log('Mongoose default connection is disconnected due to application termination');
	});

	process.exit(0);
});

const Mentions = require('./models/mentions');

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

const mentionsRoutes = require('./routes/mentions-route');
app.use('/mentions', mentionsRoutes);

module.exports = app;