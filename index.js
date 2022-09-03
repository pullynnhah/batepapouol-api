import cors from "cors";
import express from "express";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Magic happens on PORT=${port}...`));
