import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertyAccountingComponent } from './base/property-accounting.component';

const routes: Routes = [{ path: '', component: PropertyAccountingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyAccountingRoutingModule { }
