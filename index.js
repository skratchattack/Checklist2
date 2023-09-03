import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


  let list = [
    "Milk",
    "Apples",
    "Cucumber"
  ]

app.post('/addItem', (req, res) => {
    const newItem = req.body.newItem.trim();

    if (newItem !== "") {
        // Append the new item to the array
        list.push(newItem);
    }

    // Redirect back to the main page
    res.redirect('/');
});


app.get("/", (req, res) => {
    res.render("index", { list });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


