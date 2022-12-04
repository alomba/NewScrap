import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent }   from './pages/dashboard/dashboard.component';
import { LoginComponent }       from './auth/login/login.component';
import { RegisterComponent }    from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ListNewsComponent }    from './pages/list-news/list-news.component';



const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent, 
    children: [
      { path: '', redirectTo: '/listnews', pathMatch: 'full'},
      { path: 'listnews', component: ListNewsComponent},
      { path: 'dashboard', component: DashboardComponent}, 
    ]  
  }, 

  { path: 'register', component: RegisterComponent},
  { path: 'login',    component: LoginComponent},

  { path: '**',       component: NopagefoundComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
