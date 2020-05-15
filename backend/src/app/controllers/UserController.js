const yup = require('yup');
const bcrypt = require('bcryptjs');
const repository = require('../../database/repository/UserRepository');
const fileRepository = require('../../database/repository/FileRepository');

class UserController {
  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email, password } = req.body;

    // Cria hash para password
    const password_hash = await bcrypt.hash(password, 8);

    // Verifica se já existe um usuario cadastrado com o email
    const userExists = await repository.GetUserByEmail(email);

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const user = await repository.InsertUser(name, email, password_hash);

    return res.json(user);
  }

  async update(req, res) {
    const schema = yup.object().shape({
      name: yup.string(),
      email: yup.string().email(),
      oldPassword: yup.string().min(6),
      password: yup
        .string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          // Caso passe o oldpassword o password será obrigatorio
          oldPassword ? field.required() : field
        ),
      confPassword: yup.string().when('password', (password, field) =>
        // Caso passe o password, esse campo será obrigatorio
        // e o confirmpassword e password precisam ser iguais
        password ? field.required().oneOf([yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email, oldPassword, password, confPassword } = req.body;

    const user = await repository.GetUserById(req.userId);

    // Pego a hash do password antiga
    let { password_hash } = user;

    // Caso email seja diferente do e-mail já cadastrado, verifica se o novo
    // já não está cadastrado em outro usuario
    if (email !== user.email) {
      const userExists = await repository.GetUserByEmail(email);

      if (!userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    // Verifica se foi passado o password antigo e o novo para alteração
    if (oldPassword && password) {
      const checkPassword = await bcrypt.compare(oldPassword, password_hash);

      if (oldPassword && !checkPassword) {
        return res.status(401).json({ error: 'Password does not match' });
      }
      // Caso passe pelas outras validações vai criar um hash para o novo password
      password_hash = await bcrypt.hash(password, 8);
    }

    const result = await repository.UpdateUser(
      req.userId,
      name,
      email,
      password_hash
    );

    const filePerfil = await fileRepository.GetFilePerfilFromUserId(req.userId);

    const fileCover = await fileRepository.GetFileCoverFromUserID(req.userId);

    const urlFilePerfil =  !filePerfil ? '' : `http://localhost:3333/files/${filePerfil.path}`;

    const urlFileCover = !fileCover ? '' : `http://localhost:3333/files/${fileCover.path}`;

    return res.json({
      user: {
        id: req.userId,
        name,
        email,
        filePerfil: urlFilePerfil,
        fileCover: urlFileCover,
      }
    });
  }
}

module.exports = new UserController();
