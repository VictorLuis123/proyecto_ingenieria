import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})

export class ConsultasComponent implements OnInit{
  constructor(private dataservice:DataService,private formBuilder: FormBuilder){}

  mi_formulario:FormGroup=new FormGroup({})
  
  tipo_query:string='';
  phone_number:string='';
  url:string='';
  draw_table:boolean=false;
  elementos:any[]=[]
  atributos:any[]=[]

  ngOnInit():void{
    this.mi_formulario = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      address: new FormControl('',[ Validators.required]),
      telephone: new FormControl('',[Validators.required])
      
    });
  }


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
  executeQueryByPhone():void{
    this.atributos=[]
    this.elementos=[]
    this.dataservice.getQueryByPhone(this.phone_number,this.url).subscribe((data:any) => {
      data.forEach((item:any) => {
        this.atributos=Object.keys(item);
        this.elementos.push(item);
      });
    }); 
    this.draw_table=true;
  }
};


