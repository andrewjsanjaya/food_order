const { User } = require("../models");
const { checkPassword, createPassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");

class Controller {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;

      const data = { name, email, password };

      const user = await User.create(data);

      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    } catch (err) {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      let user = await User.findOne({ where: { email } });
      console.log(user);

      if (!user) {
        throw "wrong email or password!";
      }

      const checkPass = checkPassword(password, user.password);
      console.log(checkPass);

      if (!checkPass) {
        throw "wrong email or password!";
      }

      const payload = { id: user.id };

      const access_token = createToken(payload);

      res.status(200).json({
        id: user.id,
        access_token,
        name: user.name,
        email: user.email,
      });
    } catch (err) {
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
}

module.exports = Controller;
