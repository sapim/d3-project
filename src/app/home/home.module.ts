import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './components';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    RouterModule,
    BrowserModule,
    MatMenuModule,
    MatSidenavModule
  ],
  declarations: [ HomeContainerComponent]
})
export class HomeModule { }
