const connection = require('../connection');

class FileRepository {
  async InsertFilePerfil(user_id, name, path) {
    const [existFiles] = await await connection('filesperfil')
      .where({ user_id })
      .select('*');

    if (existFiles.id > 0) {
      await connection('filesperfil').where({ user_id }).update({
        user_id,
        name,
        path,
      });
    } else {
      await connection('filesperfil').insert({ user_id, name, path });
    }

    const [fileperfil] = await connection('filesperfil')
      .where({ user_id })
      .select('*');

    return fileperfil;
  }

  async InsertFileCover(user_id, name, path) {
    await connection('filescover').insert({ user_id, name, path });

    const [existFiles] = await await connection('filescover')
      .where({ user_id })
      .select('*');

    if (existFiles.id > 0) {
      await connection('filescover').where({ user_id }).update({
        user_id,
        name,
        path,
      });
    } else {
      await connection('filescover').insert({ user_id, name, path });
    }

    const [filescover] = await connection('filescover')
      .where({ user_id })
      .select('*');

    return filescover;
  }

  async GetFilePerfilFromUserId(user_id) {
    const [fileperfil] = await connection('filesperfil')
      .where({ user_id })
      .select('*');

    return fileperfil;
  }

  async GetFileCoverFromUserID(user_id) {
    const [filescover] = await connection('filescover')
      .where({ user_id })
      .select('*');

    return filescover;
  }
}

module.exports = new FileRepository();
