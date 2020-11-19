import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { DataService } from '../data.service'

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  posts=[];
  products=[]
  total : number;
  totalP : String;

  constructor(private dataService:DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts=data;
      this.total=0;
      this.totalP='';
    });
   }

  ngOnInit(): void {
  }

  agregar(producto){
    this.products.push(producto);
    this.total+=producto.precioC;
    this.totalP=`Precio total ${this.total}`
  }

  confirmar(){
    for(var i=0;i<this.products.length;i++){
      this.dataService.setCompra(this.products[i].id)
    }
    this.products=[]
    alert("Hecho")
    this.totalP='';
  }

  eliminar(prod){
    this.removeItemFromArr(this.products,prod);
    this.total-=prod.precioC;
    this.totalP=`Precio total ${this.total}`
  }

  removeItemFromArr( arr, item ){
    var i = arr.indexOf( item );
    i !== -1 && arr.splice( i, 1 );
  };
}