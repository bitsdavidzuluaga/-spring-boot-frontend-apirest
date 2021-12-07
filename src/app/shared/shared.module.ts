import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AlertsCustomComponent } from './components/alerts-custom/alerts-custom.component';
import { ModalsCustomComponent } from './components/modals-custom/modals-custom.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableCustomComponent } from './components/table-custom/table-custom.component';
// import { CoreModule } from '../core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AlertsCustomComponent,
    ModalsCustomComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    TableCustomComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    // CoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    RouterModule,
    MatBadgeModule,
  ],
  exports: [
    LayoutComponent,
    AlertsCustomComponent,
    TableCustomComponent,
    ModalsCustomComponent,
    NotFoundComponent,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    // CoreModule
  ],
})
export class SharedModule {}
