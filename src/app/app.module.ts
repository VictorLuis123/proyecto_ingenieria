import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { RouterModule, Routes } from '@angular/router';
import { TablasComponent } from './tablas/tablas.component';

const routes: Routes = [
  { path: '', component: TablasComponent }, 
  // Agrega aquí otras rutas necesarias para tu aplicación
];


@NgModule({
  declarations: [
    AppComponent,
    TablasComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Registra las rutas aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
