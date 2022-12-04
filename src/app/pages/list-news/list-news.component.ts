import { Component, OnInit } from '@angular/core';
import { SubscripcionAPIService } from 'src/app/subscripcion-api.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['list-news.component.css'
  ]
})
export class ListNewsComponent implements OnInit { 

  dataNew: any=[];

  constructor(private APIservice: SubscripcionAPIService) {
    console.log('El componente se ha creado');
  }  

  ngOnInit(): void  {   
    console.log('El componente se ha inicializado');
    this.APIservice.getUsers().subscribe((response: any) =>this.dataNew= response);
  }
}
