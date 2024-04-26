import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

//import { Observable } from 'rxjs/internal/Observable';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Método para enviar el nombre de la tabla como parámetro al archivo PHP
  getData(tableName: string):any{
    return this.http.get<any>('http://localhost/BackendEtecsa/show_tables.php', { params: { nombre_tabla: tableName } });
  } 

  //Metodo para annadir un usuario a la base de datos
  addUser(user_data:{name:string, id:number,address:string,telephone:number} ){
    return this.http.get<any>('http://localhost/BackendEtecsa/insert_client.php', { params: { name: user_data.name, id: user_data.id, address:user_data.address,telephone:user_data.telephone} });
       
  }
  ///Metodo para ejecutar as queries que no necesitan parametros adicionales
  getQuery(query_name:string):any{
    return this.http.get<any>('http://localhost/BackendEtecsa/queries_without_parameters.php', { params: { tipo_query: query_name } });
  }
  getQueryByPhone(phone_number1:string, url:string):any{
    return this.http.get<any>(url, { params: { phone_number: phone_number1} });
  }

}
