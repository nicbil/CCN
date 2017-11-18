import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CreateProtocolWithAcuteMyocardialInfarctionComponent } from './pages/create-protocol-with-acute-myocardial-infarction/create-protocol-with-acute-myocardial-infarction.component';
import { UpdateProtocolWithAcuteMyocardialInfarctionComponent } from './pages/update-protocol-with-acute-myocardial-infarction/update-protocol-with-acute-myocardial-infarction.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { AuthGuard } from "./auth.guard";

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: IndexComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'create_protocol_with_acute_myocardial_infarction',
    pathMatch: 'full',
    component: CreateProtocolWithAcuteMyocardialInfarctionComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'update_protocol_with_acute_myocardial_infarction',
    pathMatch: 'full',
    component: UpdateProtocolWithAcuteMyocardialInfarctionComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'authentication',
    pathMatch: 'full',
    component: AuthenticationComponent
  }, {
    path: '**',
    redirectTo: 'create_protocol_with_acute_myocardial_infarction',
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
    CreateProtocolWithAcuteMyocardialInfarctionComponent
];