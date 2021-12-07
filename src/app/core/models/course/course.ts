import { Teacher } from "../teacher/teacher";

export interface ICourse {
  id?: number;
  name: string;
	description: string;
  teacher?: Teacher;
}
export class Course implements ICourse {
  id?: number;
  name: string;
	description: string;
  teacher?: Teacher;
  constructor(course: ICourse) {
    this.id = course.id;
    this.name = course.name;
    this.description = course.description;
    this.teacher = course.teacher;
  }
}
