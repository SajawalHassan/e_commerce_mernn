const authenticateToken = require("../middleware/authenticateToken");
const Item = require("../models/Item");
const { itemValidation } = require("../utils/validation");
const router = require("express").Router();

router.post("/create", authenticateToken, async (req, res) => {
  try {
    const { error } = itemValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newItem = new Item({
      name: req.body.name,
      shortDesc: req.body.shortDesc,
      price: req.body.price,
      image: req.body.image,
      quantity: req.body.quantity,
      category: req.body.category,
      ownerId: req.user._id,
    });

    await newItem.save();

    res.json(newItem);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
