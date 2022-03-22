const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const mqtt = require("mqtt");
const moment = require("moment-timezone");

const dateIndo = moment.tz(Date.now(), "Asia/Makassar");
console.log(dateIndo);

const options = {
  host: "test.mosquitto.org",
  port: 1883,
};
const topic = "KoYaApp";
const client = mqtt.connect(options);
const app = express();

const ShaModel = require("./models/ShaModel");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://aird11:andiirsyad11@cluster0.gvcmd.mongodb.net/KoYaApp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

client.on("message", (topic, message) => {
  message = message.toString();
  const ob = JSON.parse(message);
  const temperature = ob.temperature;
  const humidity = ob.humidity;
  const amonia = ob.amonia;

  const data = new ShaModel({
    _id: new mongoose.Types.ObjectId(),
    temperature: temperature,
    humidity: humidity,
    amonia: amonia,
    created: dateIndo,
  });

  data.save();

  console.log(data);
});

client.on("connect", () => {
  console.log("connected");
  client.subscribe(topic);
});

client.on("error", () => {
  console.log("error");
});

app.get("/read", async (req, res) => {
  ShaModel.find({})
    .sort({ _id: -1 })
    .limit(1)
    .then((result) => {
      res.send(result);
    });
});

app.listen(3001, () => {
  console.log("Server Running on port 3001");
});
