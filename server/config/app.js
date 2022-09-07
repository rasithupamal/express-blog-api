import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

const server = express();

export const create = (config,database) => {

    server.set('env', config.env);
    server.set('port', config.port);
    server.set('hostname', config.hostname);

    // add middleware to parse the json
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
        extended: false
    }));
    server.use(cors());
    server.use(helmet());

    // connect database connection
    database.createConnection(config.databaseString);
    
    // defining an endpoint to return 
    server.get('/', (req, res) => {
        res.send("Hello this is blog api.");
    });
};


export const start = () => {

    let hostname = server.get('hostname'),
        port = server.get('port');
    server.listen(port, function () {
        console.log('Express server listening on - http://' + hostname + ':' + port);
    });
};