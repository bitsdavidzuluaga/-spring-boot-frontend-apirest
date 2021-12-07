import { Course } from "../course/course";

export interface ITeacher {
  id?: number;
  name: string;
	lastname: string;
	identification: number;
	email: string;
	mobile: number;
	user?: string;
	password?: string;
  courses?: Course[];
}
export class Teacher implements ITeacher {
  id?: number;
  name: string;
	lastname: string;
	identification: number;
	email: string;
	mobile: number;
	user?: string;
	password?: string;
  courses?: Course[];
  constructor(teacher: ITeacher) {
    this.id = teacher.id;
    this.name = teacher.name;
    this.lastname = teacher.lastname;
    this.identification = teacher.identification;
    this.email = teacher.email;
    this.mobile = teacher.mobile;
    this.user = teacher.user;
    this.password = teacher.password;
    this.courses = teacher.courses;
  }
}
