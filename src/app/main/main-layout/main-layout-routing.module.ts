import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainLayoutComponent} from './main-layout.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      {
        path: 'property/:propertyId/tenants',
        loadChildren: () => import('../tenants/tenants.module').then(m => m.TenantsModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule {
}
