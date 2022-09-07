import {create, start} from "./server/config/app";
import config  from "./server/config/env-config/config";

//create the basic server setup 
create(config);

//start the server
start();