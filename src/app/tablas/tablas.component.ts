import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit{
  constructor(private dataService:DataService) { }
  
  nombre_a_imprimir:string=''
  nombre_tabla:string=''
  elementos:any[]=[]
  atributos:any[]=[]

  ngOnInit(): void {
    // Llamar al método del servicio y pasar el nombre de la tabla como parámetro
    this.dataService.getData(this.nombre_tabla).subscribe((data:any) => {
      data.forEach((item:any) => {
        this.atributos=Object.keys(item);
        this.elementos.push(item);
      });
    });
  }

  BuscarTabla(tabla:string, titulo:string):void{
    this.nombre_tabla=tabla;
    this.nombre_a_imprimir=titulo
    this.elementos=[]
    this.atributos=[]
    this.ngOnInit()
  }

  

 
}
