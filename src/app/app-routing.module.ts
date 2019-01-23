import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { FilterComponent } from './filter/filter.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile/gnome/:id', component: ProfileComponent },
  { path: 'filter', component: FilterComponent }  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule {}