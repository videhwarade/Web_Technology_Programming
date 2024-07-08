const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 9595;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.o8jt1mz.mongodb.net/Students",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// User Schema
const studentSchema = new mongoose.Schema({
  Name: String,
  Address: String,
  Stream: String,
  Year: String,
});

const student = mongoose.model("students", studentSchema);

// Routes
app.post("/students/add", async (req, res) => {
  const student1 = new student(req.body);
  try {
    await student1.save();
    res.send(student1);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/students/all", async (req, res) => {
  try {
    const student1 = await student.find();
    res.send(student1);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/students/update/:id", async (req, res) => {
  try {
    const student1 = await student.findByIdAndUpdate(req.params.id, req.body);
    res.send(student1);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/students/delete/:id", async (req, res) => {
  try {
    const student1 = await student.findByIdAndDelete(req.params.id);
    res.send(student1);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
