import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  num:number;
  total:number=0;
  constructor(private dataSevice:DataService) {
    this.dataSevice.getDataCompXProd().subscribe(data=>{
      this.vents=data;
      for(var i=0;i<this.vents.length;i++){
        this.total=this.total+this.vents[i].precioC;
      }
    })
    this.dataSevice.getDataCompGlob().subscribe(data=>
      {this.glob=data})
    this.dataSevice.getDataProm().subscribe(data=>{
      this.num=+data;
    })
   }

  vents = [];
  glob = [];

  ngOnInit(): void {
  }

}
