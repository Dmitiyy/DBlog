import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { receiveGamesStart } from "../store/home.actions";
import { AppState, TGames } from "../store/home.reducer";

@Component({
  selector: 'app-giveaway',
  templateUrl: './home-giveaway.component.html',
  styleUrls: ['./home-giveaway.component.sass']
})
export class HomeGiveAwayComponent implements OnInit {
  games$: Observable<TGames[]> = this.store.select(state => state.home.loadedGames);
  loading$: Observable<Boolean> = this.store.select(state => state.home.loadingGames);
  pages: number = 0;
  currentPage: number = 1;
  isShowLoadBtn: Boolean = true;

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  ngOnInit() {
    this.store.dispatch(receiveGamesStart());
    this.games$.subscribe(data => {
      this.pages = Math.floor(data.length / 4);
    });
  }

  onLoadGames() {
    this.currentPage++;
    this.pages--;
    this.loading$.subscribe(loading => {
      if (!loading && this.pages === 0) {this.isShowLoadBtn = false};
    });
  }

  findIdGames(index: number, element: TGames) {
    return element.title;
  }
}