const { appDataSource } = require("../config/database.js");
const { User } = require("../entities/user.js");

const userDataSource = appDataSource.getRepository(User);

const registratinon = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(req.body);
  try {
    const user = await userDataSource.find({
      where: { email },
    });
    if (user.length > 0) {
      res.status(400).json({ error: "Email is already registered." });
    }
    if (password !== confirmPassword) {
      res
        .status(400)
        .json({ error: "Password and Confirm Password do not match." });
    }
    const result = userDataSource.insert({
      email,
      name,
      password,
    });
    res.status(200).json({ message: "User registered successfully." });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userDataSource.find({
      where: { email, password },
    });
    if (user.length === 0) {
      res.status(400).json({ error: "Invalid email or password." });
    }
    res.status(200).json({ message: "Login successful." });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { registratinon, logIn };
