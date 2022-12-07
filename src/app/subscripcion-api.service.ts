import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { NewsResponse } from './interfaces/news.interface';

@Injectable({
  providedIn: 'root'
})
export class SubscripcionAPIService {

  constructor(private http: HttpClient) {}

  baseUrl             : string = "http://127.0.0.1:8000/"
  noticias            : NewsResponse[] = []
  noticiasRecuperadas : NewsResponse[] = []

  // getUsers():any {
  //   return this.http.get('https://634694e3745bd0dbd3811262.mockapi.io/news/news');
  // }

  getNews(query:string): Observable<NewsResponse[]>{
    const url = `${this.baseUrl}${query}/news/`
    return this.http.get<NewsResponse[]>(url)
  }

  guardarNoticia(noticia:NewsResponse){
    this.noticias = JSON.parse(localStorage.getItem('noticias')!) || [];
    this.noticias.push(noticia)
    localStorage.setItem('noticias', JSON.stringify(this.noticias))
  }

  recuperarNoticias(){
    this.noticiasRecuperadas = JSON.parse(localStorage.getItem('noticias')!) || [];
    return this.noticiasRecuperadas
  }

}
