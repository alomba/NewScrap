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

  constructor(private APIservice: SubscripcionAPIService) {
   }

  ngOnInit(): void {
    this.news = this.APIservice.recuperarNoticias()
  }

}
