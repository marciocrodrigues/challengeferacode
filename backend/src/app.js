const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use('/files', express.static(path.resolve(__dirname, '..', 'temp', 'uploads')));
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
