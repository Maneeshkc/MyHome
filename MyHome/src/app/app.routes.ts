import { Routes } from '@angular/router';
import { ManageConstructionLevelComponent } from './ConstructionLevel/manage-construction-level/manage-construction-level.component';
import { NotimplementedComponent } from './shared/components/notimplemented/notimplemented.component';

export const routes: Routes = [
    {
        path: '',
        component: NotimplementedComponent
    },
    {
        path: 'construction',
        component: ManageConstructionLevelComponent,
        children: [
            {
                path: 'dashboard',
                component: NotimplementedComponent
            }
        ]
    },
    {
        path: '**',
        component: NotimplementedComponent
    }
];
