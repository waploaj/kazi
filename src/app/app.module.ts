import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {routing} from './app.routing';
import { NavbarComponent } from './componets/navbar/navbar.component';
import {AboutComponent} from './componets/about/about.component';
import { FaqComponent } from './componets/faq/faq.component';
import { UsComponent } from './componets/us/us.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FaqComponent,
    UsComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    MDBBootstrapModule.forRoot()

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
