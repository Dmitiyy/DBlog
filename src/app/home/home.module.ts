import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeCardComponent } from "./home-card/home-card.component";
import { HomeCurrencyComponent } from "./home-currency/home-currency.component";
import { HomeFooterComponent } from "./home-footer/home-footer.component";
import { HomeGiveAwayComponent } from "./home-give-away/home-give-away.component";
import { HomeHeaderComponent } from "./home-header/home-header.component";
import { HomeNewsComponent } from "./home-news/home-news.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeTubeComponent } from "./home-tube/home-tube.component";
import { HomeTubeDirective } from "./home-tube/home-tube.directive";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeTubeComponent,
    HomeTubeDirective,
    HomeCurrencyComponent,
    HomeNewsComponent,
    HomeCardComponent,
    HomeGiveAwayComponent,
    HomeFooterComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ],
})
export class HomeModule {}