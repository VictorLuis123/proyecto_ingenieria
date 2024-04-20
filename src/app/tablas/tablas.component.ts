import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit{
  constructor(private dataService:DataService) { }
  nombre_tabla='client'
  elementos:any[]=[]
  ngOnInit(): void {
    // Llamar al método del servicio y pasar el nombre de la tabla como parámetro
    this.dataService.getData(this.nombre_tabla).subscribe((data:any) => {
      //console.log(data); // Manejar los datos recibidos aquí
      data.forEach((item:any) => {
        this.elementos.push(item);
      });
    });
  }

  BuscarTabla(tabla:string):void{
    this.nombre_tabla=tabla;
    this.elementos=[]
    this.ngOnInit()
  }

  

 
}
