import _ from "lodash";
import Dotenv from "dotenv";

Dotenv.config({ silent: true });
const env = process.env.NODE_ENV || 'local';
const envConfig = require('./' + env);

let defaultConfig = {
    env: env
};
const config = _.merge(defaultConfig, envConfig);

export default config;