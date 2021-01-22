import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyOverviewRoutingModule } from './property-overview-routing.module';
import { PropertyOverviewComponent } from './base/property-overview.component';


@NgModule({
  declarations: [PropertyOverviewComponent],
  imports: [
    CommonModule,
    PropertyOverviewRoutingModule
  ]
})
export class PropertyOverviewModule { }
