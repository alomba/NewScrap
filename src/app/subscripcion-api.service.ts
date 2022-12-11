import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { NewsResponse } from './interfaces/news.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubscripcionAPIService {

  constructor(
    private http: HttpClient,
    private router: Router) {}

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
    this.noticias.push(noticia);
    localStorage.setItem('noticias', JSON.stringify(this.noticias));
  }

  recuperarNoticias(){
    this.noticiasRecuperadas = JSON.parse(localStorage.getItem('noticias')!) || [];
    return this.noticiasRecuperadas;
  }

  borrarNoticias(indice:number){
    this.noticias = JSON.parse(localStorage.getItem('noticias')!) || [];
    this.noticias.splice(indice, 1);
    localStorage.setItem('noticias', JSON.stringify(this.noticias));
  }

  comprobarNoticiaGuardada(noticia:NewsResponse){
    if (localStorage.getItem('noticias') !== null) {
        this.noticias = JSON.parse(localStorage.getItem('noticias')!) || [];
        return this.noticias.some(noticiaRecuperada => noticiaRecuperada.id === noticia.id)
    }
    else{
      return false
    }

  }

  borrarNoticiasTodas(){
    localStorage.removeItem('noticias');
    this.router.navigate(['/dashboard'])
  }

}
