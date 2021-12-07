import { Injector, Renderer2 } from '@angular/core';
import { MenuItem } from '../models/menu-item/menu-item';

/**
 * Clase para los eventos requeridos en los formularios y los menus
*/
export abstract class EventForms {

  /** Referencia al servicio de render de angular */
  private renderer: Renderer2;

  /**
   * Constructor principal. Inicializa miembros de la clase
   * @param injector referencia al contenedor de dependencias
   */
  constructor(injector: Injector) {
    this.renderer = injector.get(Renderer2);
  }
  /**
   * Metodo para eliminar los eventos cuando mas de un componente tiene el mismo id
   * @param items Array donde se ingresa los items de cada componente.
   * @example
   * this.delEvents(items);
   */
  private delEvents(items: any[]) {
    let cont = 0;
    items.forEach((item: any) => {
      cont = 0;
      items.forEach((c: any) => {
        if ((c.id === item.id)) {
          cont++;
        }
      });
      if (cont > 1) {
        item.events = undefined;
        item.route = undefined;
      }
      if (item.items) {
        this.delEvents(item.items);
      }
    });
  }

  /**
    * Metodo creado para añadir eventos tanto para los formularios como para los menus.
   * @param params  Array de items para los eventos.
   * @param rootElement  id del los elementos a los cuales se van a agregar los eventos.
   * @param isForm Si el elemento pertenece o no a los formularios.
   * @param menuParams parametro para agregar even  to
   * @example
   * this.events(this.menus, this.rootForm, true);
   */
  public events(params: any[], rootElement: any, isForm: boolean, menuParams?: any) {
    setTimeout(() => {
      if (params) {
        if (menuParams === undefined) {
          params.forEach((i: any) => {
            console.log(i);
            this.addEvents(i, rootElement, isForm);
            if (i.items) {
              this.events(i.items, rootElement, isForm);
            }
          });
        } else {
          this.addEvents(menuParams, rootElement, isForm);
          if (menuParams.items) {
            this.events(menuParams.items, rootElement, isForm);
          }
        }
      }
    }, 10);
  }

  /**
    * Metodo creado para añadir los eventos.
   * @param rootElement  id del los elementos a los cuales se van a agregar los eventos.
   * @param isForm Si el elemento pertenece o no a los formularios.
   * @param item parametro para agregar evento
   * @example
   * this.addEvents(menuParams, rootElement, isForm);
   */
  private addEvents(item: MenuItem, rootElement: any, isForm: boolean) {
    if (item.events) {
      item.events.forEach(e => {
        const nativeE = this.getElementById(rootElement, item.id, isForm);
        console.log(e, nativeE);
        if (nativeE !== null) {
          this.renderer.listen(nativeE, e.event, e.command);
        }
      });
    }
  }

  /**
    * Metodo creado para añadir eventos tanto para los formularios como para los menus.
   * @param rootElement  id del los elementos a los cuales se van a agregar los eventos.
   * @param isForm Si el elemento pertenece o no a los formularios.
   * @param id parametro para agregar evento
   * @example
   * this.getElementById(rootElement, item.id, isForm);
   */
  private getElementById(rootElement: any, id: any, isForm: boolean) {
    let result = null;
    if (rootElement !== void 0 && rootElement.nativeElement !== void 0) {
      const items = rootElement.nativeElement.children;
      for (let i = 0; i < items.length; i++) {
        const item = !isForm ?
          (items[i].id === '' ? items[i].children[0] : items[i]) :
          (items[i].children.length > 1 ? items[i].children[1].children[0] : items[i].children[0].children[0]);
        if (item.id === id) {
          result = item;
        }
      }
    }
    return result;
  }
}
