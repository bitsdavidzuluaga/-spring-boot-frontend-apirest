export interface ITableCols {
  field: string;
  header: string;
}
export class TableCols implements ITableCols {
  field: string;
  header: string;
  constructor(cols: ITableCols) {
    this.field = cols.field;
    this.header = cols.header;
  }
}

export interface ITableItem {
  cols: TableCols[];
  data?: any;
}

export class TableItem implements ITableItem {
  cols: TableCols[];
  data?: any;

  constructor(menu: ITableItem) {
    this.cols = menu.cols;
    this.data = menu.data;
  }
}
