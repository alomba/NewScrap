import { Component, Input, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-webview',
  templateUrl: './webview.component.html',
  styleUrls: ['./webview.component.css']
})
export class WebviewComponent implements OnInit {

  @Input()
  urlNew : string = ""

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    console.log(this.urlNew);
  }

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlNew);
  }

}
