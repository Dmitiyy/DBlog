import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getNewsStart } from "../store/home.actions";
import { AppState, TNews } from "../store/home.reducer";

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
})
export class HomeNewsComponent implements OnInit {
  loadedNews$: Observable<Array<TNews>> = this.store.select(state => state.home.loadedNews);
  loadingNews$: Observable<Boolean> = this.store.select(state => state.home.loadingNews);
  newsPages$: Observable<number> = this.store.select(state => state.home.newsPages);

  constructor(private store: Store<AppState>) {}
  
  ngOnInit() {
    this.store.dispatch(getNewsStart({page: 1}));
  }
}