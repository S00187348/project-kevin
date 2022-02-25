import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from 'rxjs';
import {catchError,tap} from 'rxjs/operators';
import {MangaData} from "./omdbresponse"
import{AngularFirestoreCollection, AngularFirestore} from '@angular/fire/compat/firestore/';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';

@Injectable({
  providedIn: 'root'
})
export class MangaApiService {
  mangaData:Observable<MangaData[]>;
  MangaDataCollection: AngularFirestoreCollection<MangaData>;
  errorMessage: string;
  mangaName: string;

  private _siteURl="https://api.jikan.moe/v3/search/anime?q="
  constructor(private _http:HttpClient) { }

  GetMangaData(MangaName : string): Observable<MangaData>{
    return this._http.get<MangaData>(this._siteURl + this.mangaName)
    .pipe(
      tap(data => console.log('mangaData/error'+ JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
 }
}
// getMangaData(): Observable <MangaData[]>{
//   this.mangaData = this.MangaDataCollection.valueChanges();
//   this.mangaData.subscribe{
//     (data: any) => console.log("getMangaData:"+ JSON.stringify(data))
//   }
//   return this.mangaData;
//  }


//     addMangaData(manga : MangaData) : void {
//         this. MangaDataCollection.add(JSON.parse(JSON.stringify(manga)));
//     }


// }


//
