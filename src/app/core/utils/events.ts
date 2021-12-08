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
        if (c.id === item.id) {
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
  public events(params: any[], rootElement: any) {
    setTimeout(() => {
      if (params) {
        params.forEach((i: any) => {
          this.addEvents(i, rootElement);
          if (i.items) {
            this.events(i.items, rootElement);
          }
        });
      }
    }, 0);
  }

  /**
   * Metodo creado para añadir los eventos.
   * @param rootElement  id del los elementos a los cuales se van a agregar los eventos.
   * @param isForm Si el elemento pertenece o no a los formularios.
   * @param item parametro para agregar evento
   * @example
   * this.addEvents(menuParams, rootElement, isForm);
   */
  private addEvents(item: MenuItem, rootElement: any) {
    if (item.events) {
      item.events.forEach((e) => {
        const nativeE = this.getElementById(rootElement, item.id);
        if (nativeE !== null) {
          this.renderer.listen(nativeE, e.event, e.command);
        }
      });
    }
  }

  /**
   * Metodo creado para añadir eventos tanto para los formularios como para los menus.
   * @param rootElement  id del los elementos a los cuales se van a agregar los eventos.
   * @param id parametro para agregar evento
   * @example
   * this.getElementById(rootElement, item.id, isForm);
   */
  private getElementById(rootElement: any, id: string | undefined) {
    let result = null;
    if (rootElement !== void 0 && rootElement.nativeElement !== void 0) {
      result = this.searchElementId(rootElement.nativeElement.children, id);
    }
    return result;
  }

  private searchElementId(children: any, id: string | undefined): any {
    let result = null;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.id === id) {
        result = child;
        break;
      } else {
        result = this.searchElementId(child.children, id);
        if (result !== null) {
          break;
        }
      }
    }
    return result;
  }
}
