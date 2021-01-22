import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertySettingsComponent } from './base/property-settings.component';

const routes: Routes = [{ path: '', component: PropertySettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertySettingsRoutingModule { }
