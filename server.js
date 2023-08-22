const express = require("express");
const userRouter = require("./routes/users");
const app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index", { text: "world"});
});

app.use("/users", userRouter);

app.listen(port, () => console.log(`Listening on port ${port}!`));