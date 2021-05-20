import config from 'config';
import path from 'path';
import { dbConfig } from '@interfaces/db.interface';
import { ConnectionConfig } from 'mysql';

const { host, user, password, database }: dbConfig = config.get('dbConfig');
export const dbConnection: ConnectionConfig = {
  host: host,
  port: 3306,
  user: user,
  password: password,
  database: database,
};
