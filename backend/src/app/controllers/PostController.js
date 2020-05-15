const repository = require('../../database/repository/PostRepository');

class PostController {
  async store(req, res) {
    const { post } = req.body;

    await repository.InsertPost(req.userId, post);

    return res.status(200).json({ Ok: true });
  }

  async index(req, res) {
    const result = await repository.GetAllPosts();

    return res.json(result);
  }
}

module.exports = new PostController();
