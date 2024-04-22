import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})

export class ConsultasComponent {
  constructor(private dataservice:DataService){}

  submitFormClient(user_data:{"name":string, "id":string,"address":string,"telephone":string}){
    console.log(user_data)
    this.dataservice.addUser(user_data).subscribe(
      (response:any) => {
        console.log(response);
        alert('Nuevo usuario agregado correctamente');
       },
      (error:any) => {
        console.error(error);
        alert('Error al agregar usuario');
      }
    );
  }
};

