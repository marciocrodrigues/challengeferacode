const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const authConfig = require('../../config/auth');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    // Promisify permite o uso de await em função que usa o retorno por callback
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }

  return next();
};
