import * as dotenv from 'dotenv';
import { resolve } from 'path';

//Path to read .env at root of project
dotenv.config({path: resolve(__dirname, "../../.env")});

export const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
export const LOGIN = process.env.REACT_APP_API_LOGIN;
export const REGISTRATION = process.env.REACT_APP_API_REGISTRATION;
export const REFRESH = process.env.REACT_APP_API_REFRESH;