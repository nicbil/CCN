import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CreateProtocolWithAcuteMyocardialInfarctionComponent } from './pages/create-protocol-with-acute-myocardial-infarction/create-protocol-with-acute-myocardial-infarction.component';
import { UpdateProtocolWithAcuteMyocardialInfarctionComponent } from './pages/update-protocol-with-acute-myocardial-infarction/update-protocol-with-acute-myocardial-infarction.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: IndexComponent
  }, {
    path: 'create_protocol_with_acute_myocardial_infarction',
    pathMatch: 'full',
    component: CreateProtocolWithAcuteMyocardialInfarctionComponent
  }, {
    path: 'update_protocol_with_acute_myocardial_infarction',
    pathMatch: 'full',
    component: UpdateProtocolWithAcuteMyocardialInfarctionComponent
  },{
    path: '**',
    redirectTo: 'create_protocol_with_acute_myocardial_infarction'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [
    IndexComponent,
    CreateProtocolWithAcuteMyocardialInfarctionComponent
];