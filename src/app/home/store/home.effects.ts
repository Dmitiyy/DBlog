import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { HomeService } from "../home.service";
import { HomeActions, storeData } from "./home.actions";
import { AppState } from "./home.reducer";

@Injectable()
export class HomeEffects {
  getNews$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.GET_NEWS_START),
      mergeMap(() => {
        return this.http.get('https://saurav.tech/NewsAPI/everything/bbc-news.json')
          .pipe(
            map((data: any) => {
              const transformedData = [...data.articles];
              
              this.store.dispatch(storeData({
                name: 'newsPages', data: Math.floor(data.articles.length / 4)
              }));

              this.store.dispatch(storeData({name: 'loadingNews', data: false}));
              return storeData({name: 'loadedNews', data: transformedData});
            })
          )
      })
    )
  });

  receiveGames$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.RECEIVE_GAMES_START),
      mergeMap(() => {
        return this.http.get('https://gamerpower.p.rapidapi.com/api/giveaways', {
          headers: new HttpHeaders({
            'x-rapidapi-host': 'gamerpower.p.rapidapi.com',
            'x-rapidapi-key': environment.rapidapiKey
          })
        })
        .pipe(
          map(data => {
            this.store.dispatch(storeData({name: 'loadingGames', data: false}));
            return storeData({name: 'loadedGames', data: data});
          })
        )
      })
    )
  })

  constructor(
    private actions$: Actions, 
    private homeService: HomeService,
    private store: Store<AppState>,
    private http: HttpClient
  ) {}
}