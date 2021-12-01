import { EventEmitter, Injectable } from '@angular/core';
import { AlertsCustom } from '../../models/alerts-custom/alerts-custom';

@Injectable({
  providedIn: 'root'
})
export class AlertsCustomService {

  private onAlert: EventEmitter<AlertsCustom> = new EventEmitter<AlertsCustom>();
  constructor() { }

  public AlertCustom(alert: AlertsCustom) {
    this.onAlert.emit(alert);
  }

  get OnAlertCustom(): EventEmitter<AlertsCustom> {
    return this.onAlert;
  }
}
