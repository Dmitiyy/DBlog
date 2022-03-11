import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs";
import { HomeService } from "../home.service";
import { HomeActions, storeData } from "./home.actions";
import { AppState } from "./home.reducer";

@Injectable()
export class HomeEffects {
  getNews$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HomeActions.GET_NEWS_START),
      mergeMap(({page}) => {
        return this.homeService.getNews(page)
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

  constructor(
    private actions$: Actions, 
    private homeService: HomeService,
    private store: Store<AppState>
  ) {}
}