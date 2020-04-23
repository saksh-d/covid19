import { Routes } from '@angular/router';
import { WorldComponentComponent } from './world-component/world-component.component';
import { IndiaComponentComponent } from './india-component/india-component.component';
import { HelpPageComponent } from './help-page/help-page.component';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/world',
        pathMatch: 'full',
    },
    { path: 'world',
    component: WorldComponentComponent},
    { path: 'india',
    component: IndiaComponentComponent},
    { path: 'help',
    component: HelpPageComponent}
];

// export default appRoutes;



// routing tutorial: https://www.codingame.com/playgrounds/8104/angular-router-tutorial