import { EventEmitter, Injectable } from '@angular/core';
import { TableItem } from '../../models/table-custom/table-custom';

@Injectable({
  providedIn: 'root'
})
export class TableCustomService {


  /** Evento para emitir los elementos de la tabla */
  private onTable: EventEmitter<TableItem> = new EventEmitter<TableItem>();

  /** Construcctor por defecto de la clase. Inicializa miembros con valores por defecto */
  constructor() { }
  public TableTemplate(table: TableItem): void {
    this.onTable.emit(table);
  }

  /**
   * Retorna el evento actual del Formulario
   *
   * @example
   * this.formService.OnForms.subscribe((event: FormEvent) => {
   *    this.paramsf = event.value;
   *    this.getParamsForms();
   *    this.bitsForm = this.paramsForms(this.params);
   *    this.params.forEach(i => {
   *      if (i.svgIconUrl) {
   *        i.svgIcon = this.svgIcon(i.svgIconUrl);
   *      }
   *    });
   *    this.events(this.params, this.rootForm, true);
   *    this.events(this.buttons, this.rootForm, true);
   * });
   */
  get OnTable() {
    return this.onTable;
  }
}
