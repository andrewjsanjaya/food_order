const jwt = require("jsonwebtoken");
const secretPass = "donttellanyone";

function createToken(payload) {
  return jwt.sign(payload, secretPass, { expiresIn: "24h" });
}

function checkToken(token) {
  return jwt.verify(token, secretPass);
}

module.exports = { createToken, checkToken };
