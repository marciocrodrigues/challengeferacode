const connection = require('../connection');

class PostRepository {
  async InsertPost(user_id, post) {
    await connection('posts').insert({ user_id, post });
  }

  async GetAllPosts() {
    const result  = await connection('posts')
      .join('users', 'posts.user_id', '=', 'users.id')
      .orderBy('posts.created_at', 'desc')
      .select('posts.id','posts.post', 'users.name', 'posts.created_at');

    return result;
  }
}

module.exports = new PostRepository();
