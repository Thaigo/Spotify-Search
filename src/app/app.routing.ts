import { Routes, RouterModule } from '@angular/router/router';
import { ModuleWithProviders } from '@angular/core/core';

import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SearchComponent
    },
    {
        path: 'about',
        component: AboutComponent

    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
