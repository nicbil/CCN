import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app.routing';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule,
MatNativeDateModule, MatDatepickerModule, MatSelectModule, MatMenuModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { RestrictInputDirective } from './restrictinput.directive';
import { CustomFormsModule } from 'ng2-validation';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './translate';
import { CreateProtocolWithAcuteMyocardialInfarctionComponent } from './pages/create-protocol-with-acute-myocardial-infarction/create-protocol-with-acute-myocardial-infarction.component';
import { IndexComponent } from './pages/index/index.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgDatepickerModule } from 'ng2-datepicker';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
  declarations: [
    routingComponents,
    TranslatePipe,
    AppComponent,
    RestrictInputDirective,
    CreateProtocolWithAcuteMyocardialInfarctionComponent,
    IndexComponent,
    MainMenuComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    NgDatepickerModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    TextMaskModule,
    CustomFormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [ TRANSLATION_PROVIDERS, TranslateService ]
})
export class AppModule { }
