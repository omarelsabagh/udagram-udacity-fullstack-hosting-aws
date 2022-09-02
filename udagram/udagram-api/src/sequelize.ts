import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize(`postgres://${config.username}:${config.password}@${config.host}:${config.dbPort}/postgres`);
