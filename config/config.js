const mongoose = require("mongoose");
const dotEnv = require("dotenv");
dotEnv.config();
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo db connected on " + process.env.MONGO_URL);
  })
  .catch((err) => {
    console.log(err);
  });
