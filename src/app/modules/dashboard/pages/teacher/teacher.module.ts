import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    // sCommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TeacherModule { }
