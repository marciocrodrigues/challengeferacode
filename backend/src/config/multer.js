const multer = require('multer');
const crypt = require('crypto');
const { extname, resolve } = require('path');

module.exports = {
  storage: multer.diskStorage({
    // Lugar de destino onde será salvo o arquivo
    destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
    // filename recebe um função om callback
    filename: (req, file, callback) => {
      // cria byte com tamanho 16
      crypt.randomBytes(16, (err, res) => {
        // caso de erro retorna o mesmo no callback
        if (err) return callback(err);

        // retona no callback a resposta que é o byte convertendo em string hexadecimal
        // concatenando a extensão do arquivo
        return callback(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
