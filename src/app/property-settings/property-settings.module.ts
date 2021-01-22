import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertySettingsRoutingModule } from './property-settings-routing.module';
import { PropertySettingsComponent } from './base/property-settings.component';


@NgModule({
  declarations: [PropertySettingsComponent],
  imports: [
    CommonModule,
    PropertySettingsRoutingModule
  ]
})
export class PropertySettingsModule { }
