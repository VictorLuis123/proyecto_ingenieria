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
    return this.http.get<any>('http://localhost/ServidorEtecsa/mostrar_tablas.php', { params: { nombre_tabla: tableName } });
  } 
}
