import { CourseSummary } from './../../shared/model/course-summary';
import { CourseModel } from '../model/model';
import { createCourseSummaries } from '../../shared/model/course-summary';
import * as Bluebird from 'bluebird';

export function findAllCourses(): Bluebird<CourseSummary[]> {
  return CourseModel.findAll({
    order: ['seqNo']
  })
  .then(createCourseSummaries)
}
