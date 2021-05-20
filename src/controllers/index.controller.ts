import IndexService from '@/services/index.service';
import { NextFunction, Request, Response } from 'express';

class IndexController {
  public indexService = new IndexService();

  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public postData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this.indexService.processData(req);
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
