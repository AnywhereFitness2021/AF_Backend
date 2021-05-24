const jwt = require('jsonwebtoken');

function tokenBuilder(user) {
  const payload = {
    subject: user.userId,
    username: user.username,
    role: user.role
  }
  const options = {
    expiresIn: '1d'
  }
  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    options
  );
  return token;
}

module.exports = tokenBuilder;
