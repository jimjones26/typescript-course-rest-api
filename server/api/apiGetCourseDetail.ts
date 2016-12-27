import { Request, Response } from 'express';
import * as _ from 'lodash';

import { findCourseDetail } from '../queries/findCourseDetail';
import { onError } from './onError';
import { onSuccess } from './onSuccess';

export function apiGetCourseDetail(req: Request, res: Response) {
  const courseId = parseInt(req.params.id);

  findCourseDetail(courseId)
    .then(_.partial(onSuccess, res))
    .catch(_.partial(onError, res, `Could not find course detail for id ${courseId}`));
}
