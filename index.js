require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isActive: true,
  friends: ["Jane", "Alex", "Emily"],
  address: {
    street: "123 Main St",
    city: "New York",
    zip: "10001",
  },
};
app.get("/person", (req, res) => {
  res.json(person);
});

app.get("/twiter", (req, res) => {
  res.send("vinay kumar");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at chai aur code</h1>");
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
