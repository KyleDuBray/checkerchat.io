const express = require("express");
const router = express.Router();

// @route    GET api/users
// @desc     retrieve users
// @access   PUBLIC
router.get("/", (req, res) => {
  res.send("tried to get users");
});

module.exports = router;
