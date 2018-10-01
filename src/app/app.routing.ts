import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './componets/about/about.component';
import {FaqComponent} from './componets/faq/faq.component';
import {UsComponent} from './componets/us/us.component';
import {DalaComponent} from './componets/dala/dala.component';
import {BillComponent} from './componets/bill/bill.component';
import {DigitalComponent} from './componets/digital/digital.component'
import { ContactComponent } from "src/app/componets/contact/contact.component";
import { NewsComponent } from "src/app/componets/news/news.component";
import { HelpComponent } from "src/app/componets/help/help.component";
const appRoutes: Routes = [
    {
        path: '',
        component: AboutComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'about',
        component: UsComponent
    },
    {
        path: 'dala',
        component: DalaComponent
    },
    {
        path: 'digital',
        component: DigitalComponent
    },
    {
        path: 'billboard',
        component: BillComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'help',
        component: HelpComponent
        
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);