import { NgModule, inject } from '@angular/core';
import {
  Routes,
  RouterModule,
  CanMatchFn,
  Route,
  UrlSegment,
  CanActivateFn,
  ActivatedRouteSnapshot, RouterStateSnapshot
} from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SimpleRedicrectComponent } from './pages/simple-redicrect/simple-redicrect.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PermissionService } from './services/permission.service';
import { TabsComponent } from './pages/tabs/tabs.component';
import { LeftTabComponent } from './pages/tabs/pages/left-tab/left-tab.component';
import { RightTabComponent } from './pages/tabs/pages/right-tab/right-tab.component';
import { DataResolver } from './resolvers/data.resolver';


const UserToken = 'mocked_token';

const canMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  return inject(PermissionService).canMatch(UserToken);
};

const canActivate: CanActivateFn =
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return inject(PermissionService).canActivate(UserToken, route.params['id']);
  };

const routes: Routes = [
  // http://localhost:4200
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'simple', component: SimpleRedicrectComponent },
  {
    path: 'user/:id',
    component: UserPageComponent,
    resolve: {
      user: DataResolver
    },
    data: {
      smth: true,
    }
  },
  // http://localhost:4200/user/123

  { path: 'lazy-loaded', loadChildren: () => import('./lazy-loaded/lazy-loaded.module').then(m => m.LazyLoadedModule) },

  {
    path: 'parent',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'left', pathMatch: 'full' },
      { path: 'left', component: LeftTabComponent },
      { path: 'right', component: RightTabComponent },
    ]
  },

  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [canActivate],
    data: {
      requiredRoles: ['Admin', 'Moderator']
    }
  },

  {
    path: 'another',
    loadChildren: () => import('./another-module/another.module').then(m => m.AnotherModule),
    canMatch: [canMatch],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
