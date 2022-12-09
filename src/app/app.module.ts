import { NgModule }               from '@angular/core';
import { AppRoutingModule }       from './app-routing.module';
import { RouterModule }           from '@angular/router';
import { BrowserModule }          from '@angular/platform-browser';

import { AppComponent }           from './app.component';
import { LoginComponent }         from './auth/login/login.component';
import { RegisterComponent }      from './auth/register/register.component';
import { NopagefoundComponent }   from './pages/nopagefound/nopagefound.component';
import { DashboardComponent }     from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent }   from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent }       from './shared/sidebar/sidebar.component';
import { HeaderComponent }        from './shared/header/header.component';
import { ListNewsComponent }      from './pages/list-news/list-news.component';
import { PagesComponent }         from './pages/pages.component';
import { SubscripcionAPIService } from './subscripcion-api.service';
import { HttpClientModule }       from "@angular/common/http";
import { WebviewComponent } from './pages/webview/webview.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    ListNewsComponent,
    PagesComponent,
    WebviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [SubscripcionAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
