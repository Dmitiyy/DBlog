import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { receiveGamesStart } from "../store/home.actions";
import { AppState, TGames } from "../store/home.reducer";

@Component({
  selector: 'app-giveaway',
  templateUrl: './home-giveaway.component.html',
})
export class HomeGiveAwayComponent implements OnInit {
  games$: Observable<TGames[]> = this.store.select(state => state.home.loadedGames);
  loading$: Observable<Boolean> = this.store.select(state => state.home.loadingGames);
  pages$!: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(receiveGamesStart());
    this.pages$ = new Observable(subscriber => {
      this.games$.subscribe(data => {
        subscriber.next(Math.floor(data.length / 4));
      });
    });
  }
}