import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout.component';


const routes: Routes = [{
  path: '', component: BaseLayoutComponent,
  children: [
    {
      path: ':property/overview',
      loadChildren: () => import('../../property-overview/property-overview.module').then(m => m.PropertyOverviewModule)
    },
    {
      path: ':property/tenants',
      loadChildren: () => import('../../tenants/tenants.module').then(m => m.TenantsModule)
    },
    {
      path: ':property/houses',
      loadChildren: () => import('../../houses/houses.module').then(m => m.HousesModule)
    },
    {
      path: ':property/settings',
      loadChildren: () => import('../../property-settings/property-settings.module').then(m => m.PropertySettingsModule)
    },
    {
      path: ':property/accounting',
      loadChildren: () => import('../../property-accounting/property-accounting.module').then(m => m.PropertyAccountingModule)
    },
    {
      path: 'general-settings',
      loadChildren: () => import('../../settings/settings.module').then(m => m.SettingsModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
