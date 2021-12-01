export interface IAlertsCustom {
  title: string;
  message: string;
  type?: 'info' | 'alert' | 'danger' | 'success';
}

export class AlertsCustom implements IAlertsCustom {
  public title: string;
  public message: string;
  public type?: 'info' | 'alert' | 'danger' | 'success';
  constructor(alert: IAlertsCustom) {
      this.title = alert.title;
      this.message = alert.message;
      this.type = alert.type;
  }
}
