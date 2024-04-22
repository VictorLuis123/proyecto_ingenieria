import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})

export class ConsultasComponent {
  constructor(private dataservice:DataService){}
  
  tipo_query:string='';
  elementos:any[]=[]
  atributos:any[]=[]

  ngOninit():void{}
  

  submitFormClient(user_data:{name:string, id:string,address:string,telephone:string}){
    console.log(user_data)
    this.dataservice.addUser(user_data).subscribe(
      response => {
        console.log(response);
        alert('Nuevo usuario agregado correctamente');
       },
       error =>{
        alert('No se ha podido ingresar a usuario');
       }
    );
  }
  executeQuery():void{
    this.atributos=[]
    this.elementos=[]
    this.dataservice.getQuery(this.tipo_query).subscribe((data:any) => {
      data.forEach((item:any) => {
        this.atributos=Object.keys(item);
        this.elementos.push(item);
      });
    }); 
  }
};


