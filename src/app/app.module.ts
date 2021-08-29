import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [BrowserModule,
     ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component: LoginComponent},
      {path:'products', component: ProductListComponent},
      { path: 'products/:productId', component: ProductDetailsComponent },
    ])],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
