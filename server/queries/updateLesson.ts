import { LessonModel } from './../model/model';

export function updateLesson(id: any, props: any) {
  return LessonModel.update(
    props,
    {
      where: { id }
    }
  );
}
