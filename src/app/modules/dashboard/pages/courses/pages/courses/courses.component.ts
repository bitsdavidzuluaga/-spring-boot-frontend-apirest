import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/core/models/course/course';
import { CourseService } from 'src/app/core/services/course-service/course-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public viewModal = false;
  public courses: Course[] = [
    {
      id: 1,
      name: 'Spring Boot 2.6.0',
      description: 'Este es mi curso Java',
      teacher: {
        id: 10,
        name: 'David',
        lastname: 'Zuluaga',
        identification: 1111111111,
        email: 'david.zuluaga@bitsamericas.com',
        mobile: 1111111111,
      }
    },
    {
      id: 1,
      name: 'Spring Boot 2.6.0',
      description: 'Este es mi curso AngularEste es mi curso Angular',
      teacher: {
        id: 10,
        name: 'David',
        lastname: 'Zuluaga',
        identification: 1111111111,
        email: 'david.zuluaga@bitsamericas.com',
        mobile: 1111111111,
      }
    }
  ];
  constructor(private courseServices: CourseService) { }

  ngOnInit(): void {
    this.courseServices.get('/coursesr').subscribe((data: any) => {
      if (data?.body) {
        this.courses = data.body;
      }
    });
  }

  public closeModal(event: boolean) {
    this.viewModal = event;
  }
}
