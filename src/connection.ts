import mysql from 'mysql';
import { dbConnection } from '@databases';

export const connection = mysql.createConnection(dbConnection);
