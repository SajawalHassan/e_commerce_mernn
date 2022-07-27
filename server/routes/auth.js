const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const { userValidation } = require("../utils/validation");

router.post("/register", async (req, res) => {
  try {
    // Checking if the user already exists
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json("Email already exists!");

    // Validating info
    const { error } = userValidation(req.body);
    // res.json(error.details[0].message);
    if (error) return res.status(400).json(error.details[0].message);

    // Hashing passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Getting info to save new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Saving new user into db
    await newUser.save();

    res.json(newUser);
  } catch (error) {
    if (error._message) return res.status(500).json(error.message);
    res.sendStatus(500);
  }
});

router.post("/login", async (req, res) => {
  try {
    // Making sure the req.body isn't null
    if (!req.body.email || !req.body.password) {
      return res.status(400).json("Please fill out all fields!");
    }

    // Making sure the email isn't invalid
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json("Invalid email or password");

    // Making sure the password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).json("Invalid email or password");

    const payload = {
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      _id: user._id,
    };

    // Creating the access token
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);

    res.json({
      accessToken: accessToken,
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
      _id: user._id,
    });
  } catch (error) {
    if (error._message) return res.status(500).json(error.message);
    res.sendStatus(500);
    console.log(error);
  }
});

module.exports = router;
