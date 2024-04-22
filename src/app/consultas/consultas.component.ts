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
};

