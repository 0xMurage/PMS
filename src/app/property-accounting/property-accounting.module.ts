import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyAccountingRoutingModule } from './property-accounting-routing.module';
import { PropertyAccountingComponent } from './base/property-accounting.component';


@NgModule({
  declarations: [PropertyAccountingComponent],
  imports: [
    CommonModule,
    PropertyAccountingRoutingModule
  ]
})
export class PropertyAccountingModule { }
