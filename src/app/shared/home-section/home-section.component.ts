import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getNewsStart } from "src/app/home/store/home.actions";
import { AppState, TGames, TNews } from "src/app/home/store/home.reducer";

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.sass']
})
export class HomeSectionComponent implements OnInit {
  @Input() name!: string;
  @Input() cardData!: Array<any> | null;
  @Input() loading!: Boolean | null;
  @Input() pages$!: Observable<number>;
  @Input() types!: Array<string>;
  @Input() isGames: Boolean = false;

  amountOfLoads: number = 0;
  isLoadBtnShow: Boolean = true;
  page: number = 1;

  constructor(private store: Store<AppState>) {}
  
  ngOnInit() {
    this.store.dispatch(getNewsStart({page: this.page}));
    this.pages$.subscribe(data => {this.amountOfLoads = (data || 1) - 1});
  }
  
  onLoadData() {
    this.amountOfLoads--;
    this.page++;
    if (!this.loading && this.amountOfLoads === 0) {this.isLoadBtnShow = false};
  }

  findId(index: number, element: TNews | TGames) {
    return element.title;
  }
};