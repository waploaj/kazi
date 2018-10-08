import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {routing} from './app.routing';
import { NavbarComponent } from './componets/navbar/navbar.component';
import {AboutComponent} from './componets/about/about.component';
import { FaqComponent } from './componets/faq/faq.component';
import { UsComponent } from './componets/us/us.component';
import { DalaComponent } from './componets/dala/dala.component';
import { DigitalComponent } from './componets/digital/digital.component';
import { BillComponent } from './componets/bill/bill.component';
import { ContactComponent } from './componets/contact/contact.component';
import { CareesComponent } from './componets/carees/carees.component';
import { NewsComponent } from './componets/news/news.component';
import { HelpComponent } from './componets/help/help.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule,AngularFireDatabase} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {} from './app.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    FaqComponent,
    UsComponent,
    DalaComponent,
    DigitalComponent,
    BillComponent,
    ContactComponent,
    CareesComponent,
    NewsComponent,
    HelpComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
     FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    MDBBootstrapModule.forRoot()

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
