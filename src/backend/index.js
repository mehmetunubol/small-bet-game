// To connect with your mongoDB database
const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://root:root@localhost:27017/", {
    dbName: "betgame",
  });
  console.log("connected to the db.");
};
connect();
// Schema for users of app
const ParticipantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  choice: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 1,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
const Participant = mongoose.model("participants", ParticipantSchema);

// For backend and express
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 3001");
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, true);
    },
    credentials: true,
  })
);
app.get("/", (req, resp) => {
  resp.send("App is Working");
  // You can check backend is working or not by
  // entering http://loacalhost:5000

  // If you see App is working means
  // backend working properly
});

app.post("/addOrUpdate", async (req, resp) => {
  try {
    const user = await Participant.findOne({
      name: req.body.name,
      choice: req.body.choice,
    });
    console.log("user: ", user);
    if (!user) {
      console.log("x");
      const user = new Participant(req.body);
      let result = await user.save();
      result = result.toObject();
      if (result) {
        resp.send(req.body);
        console.log(result);
      } else {
        console.log("User already added");
      }
    } else {
      await user.updateOne({
        count: parseInt(req.body.count),
      });
      resp.send(req.body);
    }
  } catch (e) {
    console.log(e);
    resp.send("Something Went Wrong");
  }
});
app.get("/get", async (req, resp) => {
  try {
    const users = await Participant.find().sort({ count: "desc" });
    resp.send(users);
  } catch (e) {
    resp.send("Something Went Wrong");
    console.log("Err: ", e);
  }
});
app.listen(3001);
