import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopulationService } from './service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
  ],
  providers:[PopulationService]
})
export class SharedModule { }
