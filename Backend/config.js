const mongoose = require("mongoose");

const Connect = (token) => {
  mongoose.connect(token);
};

module.exports = Connect;
