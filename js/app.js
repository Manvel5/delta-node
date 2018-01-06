"use strict";

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
	const content = fs.readFileSync('index.html', 'utf8');
	res.end(content);
});

server.listen(process.env.PORT || 3000);