import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule,Route} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { DataService} from './data.service'
import { ProductComponent } from './product/product.component';
import { ContainerProductComponent } from './container-product/container-product.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ComprarComponent } from './comprar/comprar.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Route[]=[
  {path:'',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ContainerProductComponent,canActivate:[AuthGuardService]},
  {path:'detal-products',component:ProductComponent},
  {path:'report',component:ReportesComponent,canActivate:[AuthGuardService]},
  {path:'comprar',component:ComprarComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    ContainerProductComponent,
    ReportesComponent,
    ComprarComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }