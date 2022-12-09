import { Component, OnInit } from '@angular/core';
import { NewsResponse } from '../../interfaces/news.interface';
import { SubscripcionAPIService } from '../../subscripcion-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'
  ]
})
export class DashboardComponent implements OnInit {

  news : NewsResponse[] = []
  urlNew  : string = ""
  webView : boolean = false

  constructor(private APIservice: SubscripcionAPIService) {
   }

  ngOnInit(): void {
    this.news = this.APIservice.recuperarNoticias()
  }

  verNoticia(url: string){
    this.webView = true
    this.urlNew = url
    console.log(url);
}

  borrarNoticia(indice:number){
    this.news.splice(indice, 1)
    this.APIservice.borrarNoticias(indice)
  }

}
