import { Request, Response } from 'express';
import * as _ from 'lodash';

import { createLesson } from '../queries/createLesson';
import { onError } from './onError';
import { onSuccess } from './onSuccess';

export function apiCreateLesson(req: Request, res: Response) {
  createLesson(req.body)
    .then(_.partial(onSuccess, res))
    .catch(err => {
      console.error(err);
    })
    .catch(_.partial(onError, res, 'Could not create lesson'))
}
