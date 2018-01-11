import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app.routing';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule,
MatNativeDateModule, MatDatepickerModule, MatSelectModule, MatMenuModule,
MatAutocompleteModule, MatTableModule, MatPaginatorModule, MatExpansionModule,
MatSortModule, MatProgressSpinnerModule, MatTabsModule, MatTooltipModule, MatIconModule } from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { RestrictInputDirective } from './restrictinput.directive';
import { CustomFormsModule } from 'ng2-validation';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService } from './translate';
import { CreateInfarctionComponent } from './pages/create-infarction/create-infarction.component';
import { IndexComponent } from './pages/index/index.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ChartsModule } from 'ng2-charts';
import { ViewInfarctionComponent } from './components/view-infarction/view-infarction.component';
import { InfarctionComponent } from './components/infarction/infarction.component';
import { UpdateInfarctionComponent } from './pages/update-infarction/update-infarction.component';
import { ObjNgForPipe } from './shared/obj-ng-for.pipe';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { DataService } from './shared/data.service';
import { DatePipe } from '@angular/common';
import { SafeHtmlPipe } from './shared/safe-html.pipe';

@NgModule({
  declarations: [
    routingComponents,
    TranslatePipe,
    AppComponent,
    RestrictInputDirective,
    CreateInfarctionComponent,
    IndexComponent,
    MainMenuComponent,
    ViewInfarctionComponent,
    InfarctionComponent,
    UpdateInfarctionComponent,
    ObjNgForPipe,
    AuthenticationComponent
  ],
  imports: [
    NgbModule.forRoot(),
    HttpModule,
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
    MatAutocompleteModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    TextMaskModule,
    CustomFormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatIconModule,
    ChartsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslateService,
    DataService,
    DatePipe,
    SafeHtmlPipe
  ]
})
export class AppModule { }
