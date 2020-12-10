import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginModule} from './access/login/login.module';

const routes: Routes = [
  {path: 'auth/login', loadChildren: () => LoginModule},
  {
    path: 'auth/signup',
    loadChildren: () => import('./access/registration/registration.module').then(m => m.RegistrationModule)
  },
  {
    path: 'auth/password_reset',
    loadChildren: () => import('./access/password-reset/password-reset.module').then(m => m.PasswordResetModule)
  },
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  { path: 'main', loadChildren: () => import('./main/main-layout/main-layout.module').then(m => m.MainLayoutModule) },
  {
    path: '**',
    loadChildren: () => import('./access/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
