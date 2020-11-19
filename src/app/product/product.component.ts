import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private dataService:DataService,private loginService:AuthenticationService) {
    
    this.actualizar();
   }

  ngOnInit(): void {
  }

  posts = [];

  agregar(nombre,cantidad,precio){
    this.dataService.setAgregar(nombre,cantidad,precio)
    this.actualizar();
  }

  actualizar(){
    this.dataService.getData().subscribe(data => {
      this.posts=data;
    });
  }

  limpiar(){
    
  }

  onSubmit(){
    
  }
}