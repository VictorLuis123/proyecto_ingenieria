import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit{
  constructor(private dataservice:DataService) { }
  //tabla='client'
  ngOnInit():void{

  }

 
}
