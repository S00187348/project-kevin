import { Component } from '@angular/core';
import {MangaData} from "./services/omdbresponse";
import {MangaApiService} from "../app/services/manga-api.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MangaApiService]
})

export class AppComponent {
  MangaData: MangaData;
  errorMessage:any;
  MangaName: string;


  constructor(private _MangaApiService: MangaApiService){

  }
  getMangaDetails(MangaName:string): boolean {
    this._MangaApiService.GetMangaData(MangaName).subscribe(
      MangaData =>{
        this.MangaData =  MangaData;
        console.log('writer Name' + this.MangaData.Title + this.MangaData.image_url +
        this.MangaData.synopsis
        + this.MangaData.episodes
        + this.MangaData.score);
      },
      error => this.errorMessage = <any>error
    );
   return false;
  }
}
