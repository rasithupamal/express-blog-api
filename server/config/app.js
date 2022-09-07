import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

const server = express();

export const create = () => {

    // add middleware to parse the json
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: false
    }));
    server.use(cors());
    server.use(helmet());

    // defining an endpoint to return 
    server.get('/', (req, res) => {
        res.send("Hello this is blog api.");
    });
};


export const start = () => {
    server.listen(3001, function () {
        console.log('listening on port 3001');
    });
};