const connection = require('../connection');

class UserRepository {
  async GetUserByEmail(email) {
    const [result] = await connection('users').where({ email }).select('*');

    return result;
  }

  async InsertUser(name, email, password_hash) {
    await connection('users').insert({
      name,
      email,
      password_hash,
    });

    const user = await connection('users')
      .first('id', 'name', 'email')
      .orderBy('id', 'desc');

    return user;
  }

  async GetUserById(id) {
    const [result] = await connection('users').where({ id }).select('*');

    return result;
  }

  async UpdateUser(id, name, email, password_hash) {
    await connection('users').where({ id }).update({
      name,
      email,
      password_hash,
    });

    const [user] = await connection('users').where({ id }).select('*');

    return user;
  }
}

module.exports = new UserRepository();
