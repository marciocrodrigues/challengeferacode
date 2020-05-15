const repository = require('../../database/repository/FileRepository');

class FileController {
  async storeFilePerfil(req, res) {
    const { originalname: name, filename: path } = req.file;

    const result = await repository.InsertFilePerfil(req.userId, name, path);

    const urlFilePerfil =  `http://localhost:3333/files/${result.path}`;

    return res.json({
      filePerfil: urlFilePerfil,
    });
  }

  async storeFileCover(req, res) {
    const { originalname: name, filename: path } = req.file;

    const result = await repository.InsertFileCover(req.userId, name, path);

    const urlFileCover =  `http://localhost:3333/files/${result.path}`;

    return res.json({
      fileCover: urlFileCover,
    });
  }
}

module.exports = new FileController();
