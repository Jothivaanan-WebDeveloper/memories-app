import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/memory', router);

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://admin-joe:123@cluster0.htv13wx.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true })
    .then(() => app.listen(PORT, () => { console.log(`Port is listening to ${PORT}`) }))
    .catch((err) => { console.log(err) });