import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

// defining the Express app
const app = express();

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send("Hello this is blog api.");
});

// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001');
});