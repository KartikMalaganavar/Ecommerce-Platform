const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "24h" });
  console.log("token created", token)
  return token;
};

const getUserIdFromToken = (token) => {
  
  const decodedToken = jwt.verify(token, SECRET_KEY);

  return decodedToken.userId;
};

module.exports = { generateToken, getUserIdFromToken };
