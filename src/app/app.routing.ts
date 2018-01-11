import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CreateInfarctionComponent } from './pages/create-infarction/create-infarction.component';
import { UpdateInfarctionComponent } from './pages/update-infarction/update-infarction.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: IndexComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'create_infarction',
    pathMatch: 'full',
    component: CreateInfarctionComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'update_infarction',
    pathMatch: 'full',
    component: UpdateInfarctionComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'authentication',
    pathMatch: 'full',
    component: AuthenticationComponent
  }, {
    path: '**',
    redirectTo: 'create_infarction',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})

export class AppRoutingModule {}

export const routingComponents = [
    IndexComponent,
    CreateInfarctionComponent
];