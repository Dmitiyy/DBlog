import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { HomeCardComponent } from "./home-card/home-card.component";
import { HomeCurrencyComponent } from "./home-currency/home-currency.component";
import { HomeFooterComponent } from "./home-footer/home-footer.component";
import { HomeHeaderComponent } from "./home-header/home-header.component";
import { HomeNewsComponent } from "./home-news/home-news.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeTubeComponent } from "./home-tube/home-tube.component";
import { HomeTubeDirective } from "./home-tube/home-tube.directive";
import { HomeComponent } from "./home.component";
import { HomeGiveAwayComponent } from "./home-giveaway/home-giveaway.component";
import { TransformPlatforms } from "./home-giveaway/home-giveaway.pipe";

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeTubeComponent,
    HomeTubeDirective,
    HomeCurrencyComponent,
    HomeNewsComponent,
    HomeCardComponent,
    HomeFooterComponent,
    HomeGiveAwayComponent,
    TransformPlatforms
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    HttpClientModule
  ],
})
export class HomeModule {}