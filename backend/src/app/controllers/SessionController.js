const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const yup = require('yup');
const auth = require('../../config/auth');
const repository = require('../../database/repository/SessionRepository');
const fileRepository = require('../../database/repository/FileRepository');

class SessionController {
  async store(req, res) {
    const schema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, password } = req.body;

    const result = await repository.VerifyExistsUserFromEmail(email);

    if (!result) {
      return res.status(401).json({ error: 'User not found' });
    }

    const checkPassword = await bcrypt.compare(password, result.password_hash);

    if (!checkPassword) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = result;

    const filePerfil = await fileRepository.GetFilePerfilFromUserId(id);

    const fileCover = await fileRepository.GetFileCoverFromUserID(id);

    const urlFilePerfil =  !filePerfil ? '' : `http://localhost:3333/files/${filePerfil.path}`;

    const urlFileCover = !fileCover ? '' : `http://localhost:3333/files/${fileCover.path}`;

    return res.json({
      user: {
        id,
        name,
        email,
        filePerfil: urlFilePerfil,
        fileCover: urlFileCover,
      },
      token: jwt.sign({ id }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();
