const mongoose = require("mongoose");

async function connectToDatabase(MONGODB_CONN) {
  try {
    await mongoose.connect(MONGODB_CONN);
  } catch (err) {
  }
}

module.exports = { connectToDatabase };
