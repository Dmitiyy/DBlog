import { 
  HttpClient, 
  HttpHeaders, 
  HttpParams, 
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { environment } from "src/environments/environment.prod";
import { storeData } from "./store/home.actions";
import { AppState } from "./store/home.reducer";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getNews(page: number) {
    const params = new HttpParams()
      .set('sources', 'bbc-news')
      .set('page', page)
      .set('pageSize', '4');

    this.store.dispatch(storeData({name: 'loadingNews', data: true}));

    return this.http.get(environment.apiNews, {
      params, headers: new HttpHeaders({
        'Authorization': environment.newsKey,
        'Access-Control-Allow-Origin': '*'        
      }), responseType: 'text'
    });
  }

  receiveGames() {
    this.store.dispatch(storeData({name: 'loadingGames', data: true}));

    return this.http.get(environment.apiGames, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }), responseType: 'text'
    })
  }
} 