import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getNewsStart } from "../store/home.actions";
import { AppState, TNews } from "../store/home.reducer";

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.sass']
})
export class HomeNewsComponent implements OnInit {
  loadedNews$: Observable<Array<TNews>> = this.store.select(state => state.home.loadedNews);
  loadingNews$: Observable<Boolean> = this.store.select(state => state.home.loadingNews);
  newsPages$: Observable<number> = this.store.select(state => state.home.newsPages);

  amountOfLoads: number = 0;
  isLoadBtnShow: Boolean = true;
  page: number = 1;
  loading: Boolean = false;
  renderedData: TNews[] = [];

  constructor(private store: Store<AppState>) {}
  
  ngOnInit() {
    this.store.dispatch(getNewsStart({page: this.page}));
    this.newsPages$.subscribe(data => {this.amountOfLoads = data - 1});
    this.loadingNews$.subscribe(data => {this.loading = data});
    this.loadedNews$.subscribe(data => {this.renderedData = [...data]});
  }
  
  onLoadNews() {
    this.amountOfLoads--;
    this.page++;
    if (!this.loading && this.amountOfLoads === 0) {this.isLoadBtnShow = false};
  }

  findIdNews(index: number, element: TNews) {
    return element.title;
  }
}