import { create, start } from "./server/config/app";
import config from "./server/config/env-config/config";
import { dbConnection } from "./server/config/db-connection";
//create the basic server setup 
create(config, dbConnection);

//start the server
start();