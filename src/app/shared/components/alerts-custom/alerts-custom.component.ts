import { Component, OnInit } from '@angular/core';
import { AlertsCustom } from 'src/app/core/models/alerts-custom/alerts-custom';
import { AlertsCustomService } from 'src/app/core/services/alerts-custom/alerts-custom.service';

@Component({
  selector: 'app-alerts-custom',
  templateUrl: './alerts-custom.component.html',
  styleUrls: ['./alerts-custom.component.scss']
})
export class AlertsCustomComponent implements OnInit {

  public viewAlert?: AlertsCustom;

  constructor(private alert: AlertsCustomService) {
    alert.OnAlertCustom.subscribe((alert: AlertsCustom) => {
      this.viewAlert = alert;
      this.delay();
    });
  }

  ngOnInit(): void {
  }

  private delay() {
    setTimeout(() => {
      this.viewAlert = undefined;
    }, 2000);
  }
}
