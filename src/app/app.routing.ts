import {Routes} from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'widget',
        loadChildren: './pages/widget/widget.module#WidgetModule'
      }, {
        path: 'animations',
        loadChildren: './pages/animations/animations.module#AnimationsModule'
      }, {
        path: 'map',
        loadChildren: './pages/map/map.module#MapModule',
      }
    ]
  }, {
    path: '',
    component: AuthComponent,
    children: [
    ]
  }
];
