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
  amountOfLoads: number = 2;
  isLoadBtnShow: Boolean = true;
  page: number = 1;

  constructor(private store: Store<AppState>) {}
  
  ngOnInit() {
    this.store.dispatch(getNewsStart({page: this.page}));
    this.loadedNews$.subscribe(data => {
      console.log(data);
    });
    this.loadingNews$.subscribe(data => {
      console.log(data);
    })
  }
  
  onLoadNews() {
    this.loadingNews$.subscribe(loading => {
      console.log('here');
      
      if (!loading && this.amountOfLoads === 0) {this.isLoadBtnShow = false};
    });
    this.amountOfLoads--;
    this.page++;
    this.store.dispatch(getNewsStart({page: this.page}));
  }

  findIdNews(index: number, element: TNews) {
    return element.title;
  }
}