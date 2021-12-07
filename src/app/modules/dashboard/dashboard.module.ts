import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    DashboardComponent,
    WelcomeComponent
  ],
  imports: [
    // CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
