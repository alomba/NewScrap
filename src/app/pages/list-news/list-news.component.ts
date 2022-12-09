import { Component, OnInit } from '@angular/core';
import { SubscripcionAPIService } from 'src/app/subscripcion-api.service';
import { NewsResponse } from '../../interfaces/news.interface';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['list-news.component.scss'
  ]
})
export class ListNewsComponent implements OnInit {

  news     : NewsResponse[] = [];
  urlNew   : string = ""
  webView  : boolean = false
  guardada : boolean = false

  constructor(private APIservice: SubscripcionAPIService) {
    console.log('El componente se ha creado');
  }

  ngOnInit(): void  {
    console.log('El componente se ha inicializado');
    this.APIservice.getNews('anait').subscribe((response: NewsResponse[]) =>{
        this.news = response
    });
    this.APIservice.getNews('publico').subscribe((response: NewsResponse[]) =>{
        this.news.push(...response)
    });
    // this.APIservice.getNews('xataka').subscribe((response: NewsResponse[]) =>{
    //     this.news.push(...response)
    //     this.news = this.shuffle(this.news)
    // });

    console.log(this.news);

  }



  guardarNoticia(noticia: NewsResponse){
    this.APIservice.guardarNoticia(noticia)
    this.guardada = true
  }


  verNoticia(url: string){
      this.webView = true
      this.urlNew = url
      console.log(url);
  }

  trackByNew(index: number, item: any) {
    return index; // usamos el índice como identificador único para cada elemento
  }

  comprobarNoticiaGuardada(noticia: NewsResponse){
    return this.APIservice.comprobarNoticiaGuardada(noticia)
  }



  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}




}
