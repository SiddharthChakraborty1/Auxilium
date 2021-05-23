const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const {sendEmail} = require("./mail")

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser())

app.post("/api/sendMail", (req, res) => {
    console.log(req.body);
    sendEmail(req.body.mail, req.body.name, req.body.title, req.body.type)
})

app.listen(5000, () => {
    console.log("Server running at 5000");
})