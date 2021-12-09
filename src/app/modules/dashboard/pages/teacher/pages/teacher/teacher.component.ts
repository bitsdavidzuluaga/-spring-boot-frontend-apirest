import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'src/app/core/models/menu-item/menu-item';
import { TableCols, TableItem } from 'src/app/core/models/table-custom/table-custom';
import { Teacher } from 'src/app/core/models/teacher/teacher';
import { AlertsCustomService } from 'src/app/core/services/alerts-custom/alerts-custom.service';
import { TableCustomService } from 'src/app/core/services/table-custom/table-custom.service';
import { TeacherService } from 'src/app/core/services/teacher-service/teacher-service.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  public formGroup: FormGroup = this.fb.group({
    id: new FormControl(null),
    name: new FormControl(null,[Validators.required]),
    lastname: new FormControl(null,[Validators.required]),
    identification: new FormControl(null,[Validators.required]),
    mobile: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required, Validators.email]),
    user: new FormControl({value: null, disabled: true},[Validators.required]),
    password: new FormControl({value: null, disabled: true}, [Validators.required]),
  });
  public viewModal = false;
  public table: TableItem  = {
    cols: [
      {
        field: 'name',
        header: 'Nombre'
      },
      {
        field: 'lastname',
        header: 'Apellido'
      },
      {
        field: 'identification',
        header: 'Num. Identificación'
      },
      {
        field: 'email',
        header: 'Email'
      },
      {
        field: 'mobile',
        header: 'Telefono'
      },
      {
        field: 'user',
        header: 'Usuario'
      },
      {
        field: 'actions',
        header: 'Acciones'
      }
    ],
    data: []
  }
  constructor(private fb: FormBuilder,
    private teacherService: TeacherService,
    private tableService: TableCustomService,
    private alertCustom: AlertsCustomService) { }

  ngOnInit(): void {
    this.selectTeachers();
  }

  private selectTeachers() {
    this.table.data = [];
    this.teacherService.get('/teacher').subscribe((data) => {
      data.body.map((x, index) => {
        const d: any = Object.assign({}, x);
        const actions: MenuItem[] = [
          {
            id: 'edit_' + index,
            icon: 'edit',
            type: 'button',
            events: [
              {
                event: 'click',
                command: () => {
                  this.editTeacher(x);
                }
              }
            ]
          },
          {
            id: 'delete_' + index,
            icon: 'delete',
            type: 'button',
            events: [
              {
                event: 'click',
                command: () => {
                  this.deleteTeacher(x.id);
                }
              }
            ]
          },
        ];
        d['actions'] = actions;
        this.table.data.push(d);
      });
      this.addElemetsTable();
    });
  }

  private addElemetsTable() {
    this.tableService.TableTemplate(this.table);
  }

  private editTeacher(teacher: Teacher) {
    this.formGroup.patchValue({
      id: teacher.id,
      name: teacher.name,
      lastname: teacher.lastname,
      identification: teacher.identification,
      mobile: teacher.mobile,
      email: teacher.email,
      user: teacher.user,
      password: teacher.password
    });
    this.viewModal = true;
  }

  public saveTeacher(edit?: boolean): void {
    const teacher:  Teacher = this.formGroup.value;
    teacher.password = this.formGroup.get('password')?.value;
    teacher.user = this.formGroup.get('user')?.value;
    this.teacherService.post(edit ? '/teacher/' + teacher.id : '/teacher/save', teacher).subscribe((data: any) => {
      this.selectTeachers();
      this.alertCustom.AlertCustom({ title: 'success', message: 'Profesor guardado correctamente.', type: 'success' });
      this.closeModal(false);
    }, error => {
      this.alertCustom.AlertCustom({ title: 'Alerta', message: error, type: 'danger' });
    });
  }

  public createUserName(): void {
    let user = '';
    if (this.formGroup.get('name')?.value) {
      user += this.formGroup.get('name')?.value.split(' ')[0];
      user += '.';
    }
    if (this.formGroup.get('lastname')?.value) {
      user += this.formGroup.get('lastname')?.value.split(' ')[0];
    }
    this.formGroup.patchValue({
      user: user.toLowerCase()
    });
  }

  public createPassword(): void {

    this.formGroup.patchValue({
      password: this.formGroup.get('identification')?.value
    });
  }

  public closeModal(event: boolean) {
    this.viewModal = event;
    this.formGroup.reset();
  }

  public deleteTeacher(id?: number) {
    if (id) {
      this.teacherService.delete('/teacher/' + id).subscribe((data: any) => {
        console.log(data);
      });
    }
  }

}
