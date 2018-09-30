import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './componets/about/about.component';
import {FaqComponent} from './componets/faq/faq.component';
import {UsComponent} from './componets/us/us.component';
import {DalaComponent} from './componets/dala/dala.component';
import {BillComponent} from './componets/bill/bill.component';
import {DigitalComponent} from './componets/digital/digital.component'
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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);