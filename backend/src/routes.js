const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const authMiddleware = require('./app/middlewares/auth');

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const FileController = require('./app/controllers/FileController');
const PostController = require('./app/controllers/PostController');

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/session', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post(
  '/filesperfil',
  upload.single('file'),
  FileController.storeFilePerfil
);

routes.post(
  '/filescover',
  upload.single('file'),
  FileController.storeFileCover
);

routes.post('/posts', PostController.store);
routes.get('/posts', PostController.index);

module.exports = routes;
