import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './componets/about/about.component';
import {FaqComponent} from './componets/faq/faq.component';
import {UsComponent} from './componets/us/us.component';
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
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);