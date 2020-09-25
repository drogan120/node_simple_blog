const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config();

let mongoUrl = process.env.MONGO_URL;

mongoose.Promise = global.Promise;
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo db connected on " + mongoUrl);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  port: process.env.APP_PORT,
};
