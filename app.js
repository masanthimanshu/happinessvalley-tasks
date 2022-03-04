import express from "express";
import { engine } from "express-handlebars";
import bodyParser from "body-parser";
import fs from "node:fs";
import getDate from "./date.js";

const homeObj = JSON.parse(fs.readFileSync("./json/home.json"));

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", homeObj);
});

app.post("/update", (req, res) => {
  const id = homeObj.data.length + 1;
  const { task } = req.body;
  const date = getDate();

  homeObj.data.push({
    id,
    date,
    task,
  });
  fs.writeFile("./json/home.json", JSON.stringify(homeObj), (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Active on http://localhost:${port}`);
});
