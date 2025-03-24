import { Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { DynamicUserComponent } from './dynamic-user/dynamic-user.component';
import { DynamicRoutesComponent } from './dynamic-routes/dynamic-routes.component';
// import { LazyLoadComponent } from './lazy-load/lazy-load.component';

export const routes: Routes = [
    { path: "logout", component: LogoutComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent },
    { path: "profile", component: ProfileComponent, data: { name: 'Suraj', age: 18 } },
    { path: "user/:id/:courseName/:age", component: DynamicUserComponent },
    { path: "", component: HomeComponent },
    // {path:"lazyload",component:LazyLoadComponent},
    { path: "lazyload", loadComponent: () => import('./lazy-load/lazy-load.component').then((c) => c.LazyLoadComponent) },
    { path: "**", component: PageNotFoundComponent },
];
