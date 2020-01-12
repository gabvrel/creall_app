const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.set("port", port);

app.use(express.json());
//app.use(express.urlencoded({extended: false}))

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, "..","frontend", "build")));


app.listen(app.get("port"), () => {
    console.log("running")
});