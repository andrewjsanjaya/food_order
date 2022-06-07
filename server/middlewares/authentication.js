const { checkToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    const payload = checkToken(access_token);

    const user = await User.findByPk(payload.id);

    if (!user) {
      throw "Unauthorized";
    }

    req.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    next();
  } catch (err) {
    res.status(500).json({
      error: "Unauthorized",
    });
  }
}

module.exports = authentication;
