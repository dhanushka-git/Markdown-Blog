const express = require("express");
const articleRoter = require("./routes/articles");
const app = express();

app.set('view engine', 'ejs');

app.use("/articles", articleRoter);

app.get("/", (req, res)=>{
    res.render("index");
});

app.listen(5000);