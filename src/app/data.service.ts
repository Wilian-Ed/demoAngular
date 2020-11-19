import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http'

import { Post } from './models/Post';
import { Ok } from './models/Ok';
import { Vent } from './models/Vent';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) {
    
   }

   getData(){
      return this.http.get<Post[]>('https://pruebacean.herokuapp.com/v0/product');
   }

   getDataCompGlob(){
    return this.http.get<Vent[]>('https://pruebacean.herokuapp.com/v0/vent-glob');
  }

  getDataCompXProd(){
    return this.http.get<Vent[]>('https://pruebacean.herokuapp.com/v0/vent-prod');
  }

  getDataProm(){
    return this.http.get<Vent[]>('https://pruebacean.herokuapp.com/v0/prom');
  }

   setCompra(id){
    const params= new HttpParams()
      .set('id',id)
    ;
     return this.http.get('https://pruebacean.herokuapp.com/v0/compra',{params}).subscribe((data)=>{console.log(data)});
   }

   setAgregar(nombre,cantidad,precio){
     const params= new HttpParams()
     .set('nombre',nombre)
     .set('cantidad',cantidad)
     .set('precio',precio);
     return this.http.get('https://pruebacean.herokuapp.com/v0/nuevo_product',{params}).subscribe((data)=>{console.log(data)});
   }

   user(usuario,pass){
     const params=new HttpParams()
     .set('user',usuario).set('pass',pass);
    return this.http.get('http://pruebacean.herokuapp.com/v0/autenticar',{params});
   }
}