import { NgModule } from '@angular/core';
import { HomeContainerComponent } from './components';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [ HomeContainerComponent]
})
export class HomeModule { }
