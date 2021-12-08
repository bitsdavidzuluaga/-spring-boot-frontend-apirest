import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'src/app/core/models/menu-item/menu-item';
import { TableCols, TableItem } from 'src/app/core/models/table-custom/table-custom';
import { TableCustomService } from 'src/app/core/services/table-custom/table-custom.service';
import { TeacherService } from 'src/app/core/services/teacher-service/teacher-service.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  public formGroup: FormGroup = this.fb.group({
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
  constructor(private fb: FormBuilder, private teacherService: TeacherService, private tableService: TableCustomService) { }

  ngOnInit(): void {
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
                  console.log('edit teacher');
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
                  console.log('delete teacher');
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

  public saveTeacher(): void {
    this.teacherService.post('/teacher', this.formGroup.value).subscribe((data: any) => {
      console.log(data);
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
    this.formGroup.get('user')?.setValue(user.toLowerCase());
  }

  public createPassword(): void {
    this.formGroup.get('password')?.setValue(this.formGroup.get('identification')?.value);
  }

  public closeModal(event: boolean) {
    this.viewModal = event;
    this.formGroup.reset();
  }

}
