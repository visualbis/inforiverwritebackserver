import { connection } from '@/connection';
import { logger } from '@/utils/logger';
import { Request } from 'express';

class IndexService {
  public async processData(request: Request) {
    const { body } = request;
    const data = body.data.split('\n');
    const csvCols = data.map(row => row.split(','));
    if (!csvCols?.length) {
      return;
    }
    const [columnData, ...dataRows] = csvCols;
    const tableName = `writeBack${Date.now()}`;
    const columns = columnData.map(data => data.replace(' ', '_').replace('Δ', 'del_').replace('%', '_per').replace('(', '_').replace(')', '_'));

    console.log('columns: ', columns);
    const createTable = `CREATE TABLE IF NOT EXISTS ${tableName}(
      id INT PRIMARY KEY AUTO_INCREMENT,
      ${columns.map(col => `${col} TEXT`).join(',\n')}
      )`;
    connection.query(createTable, err => {
      if (err) {
        logger.error(err.message);
      }
    });
    const insertValues = `INSERT INTO ${tableName} (${columns.join(',')}) VALUES ?;`;
    connection.query(insertValues, [dataRows], err => {
      if (err) {
        logger.error(err.message);
      }
    });
    logger.info('Table Successfully Created');
  }
}

export default IndexService;
