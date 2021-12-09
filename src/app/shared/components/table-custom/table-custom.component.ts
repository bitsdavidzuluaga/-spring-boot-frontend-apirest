import { AfterViewInit, Component, ElementRef, Injector, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { EventForms } from 'src/app/core/utils/events';
import { TableItem } from 'src/app/core/models/table-custom/table-custom';
import { TableCustomService } from 'src/app/core/services/table-custom/table-custom.service';

@Component({
  selector: 'app-table-custom',
  templateUrl: './table-custom.component.html',
  styleUrls: ['./table-custom.component.scss']
})
export class TableCustomComponent extends EventForms implements OnInit {

  @ViewChild('rootTable') rootTable?: ElementRef;
  public table?: TableItem;

  constructor(injector: Injector, private tableService: TableCustomService) {
    super(injector);
    this.tableService.OnTable.subscribe((table: TableItem) => {
      this.table = table;
      this.addEvent(this.table);
    });
  }

  ngOnInit(): void {
  }

  private addEvent(table: TableItem) {
    table.cols.forEach((col: any) => {
      table.data.forEach((item: any) => {
        if (this.isObject(item[col.field])) {
          this.events(item[col.field], this.rootTable);
        }
      });
    });
  }

  public isObject(item: any) {
    return typeof item === 'object' && Array.isArray(item);
  }

}
