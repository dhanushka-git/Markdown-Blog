const express = require("express");
const mongoose = require('mongoose');
const Article = require("./models/article")
const articleRouter = require("./routes/articles");
const methodOverride = require('method-override');
const app = express();

mongoose.connect(
  "mongodb+srv://admin-shan:Test123@cluster0.shxyl.mongodb.net/markdownblog?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'))


app.get("/", async (req, res)=>{

    const articles = await Article.find().sort({createdAt:'desc'});


    res.render("articles/index", {articles : articles});
});


app.use("/articles", articleRouter);

app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});