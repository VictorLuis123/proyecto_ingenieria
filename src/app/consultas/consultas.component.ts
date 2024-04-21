import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})

export class ConsultasComponent {
  constructor(private dataservice:DataService){}
  // Interface Usuario{
  //   name:string;
  //   id:number;
  //   address:string;
  //   telephone:number;
  //   lazyness?:number;
  // }
  // let user_data:Usuario{
  //   name='';
  //   id=0;
  //   address='';
  //   telephone=0;
  // }
  user_data:any={}
    

 
  submitFormClient(){
    // const observer={
    //   next:(response:any)=>{
    //     console.log('Usuario agregado exitosamente: ', response);
    //   },
    //   error:(error:any)=>{
    //     console.log('Error al agregar usuario: ',error);
    //   }
    // };
    this.dataservice.addUser(this.user_data).subscribe(
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

