"use strict";

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const db = require('./config/db');

if (cluster.isMaster) {

	// Create db tables using latest migrations
	db.knex.migrate.latest([db]);

	console.log(`Master ${process.pid} is running`);

	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
		cluster.fork();
	});
} else {
	// Workers can share any TCP connection
	// In this case it is an HTTP server

	// Application access point.
	require('./bin/www');

	console.log(`Worker ${process.pid} started`);
}