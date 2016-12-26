import { Request, Response } from 'express';
import * as _ from 'lodash';

import { findAllCourses } from '../queries/findAllCourses';
import { onError } from './onError';

export function apiGetAllCourses(req: Request, res: Response) {
  findAllCourses()
    .then(() => { throw new Error('Error') })
    .then(results => {
      res.status(200).json({ results });
    })
    .catch(_.partial(onError, res, "Find All Courses Failed"));
}
