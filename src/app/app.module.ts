import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { TablasComponent } from './tablas/tablas.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { DataService } from './data.service';


const routes: Routes = [
  { path: '', component: TablasComponent }, 
  { path: 'consultas', component: ConsultasComponent}
  // Agrega aquí otras rutas necesarias para tu aplicación
];


@NgModule({
  declarations: [
    AppComponent,
    TablasComponent,
    ConsultasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes) // Registra las rutas aquí
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
