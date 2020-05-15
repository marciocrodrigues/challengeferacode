const connection = require('../connection');

class SessionRepository {
  async VerifyExistsUserFromEmail(email) {
    const [result] = await connection('users')
      .where({ email })
      .select('id', 'password_hash', 'name');

    return result;
  }
}

module.exports = new SessionRepository();
