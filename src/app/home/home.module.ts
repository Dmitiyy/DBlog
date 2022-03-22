import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { HomeCurrencyComponent } from "./home-currency/home-currency.component";
import { HomeFooterComponent } from "./home-footer/home-footer.component";
import { HomeHeaderComponent } from "./home-header/home-header.component";
import { HomeNewsComponent } from "./home-news/home-news.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeGiveAwayComponent } from "./home-giveaway/home-giveaway.component";
import { SharedModule } from "../shared/shared.module";
import { ChatComponent } from "../chat/chat.component";

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeCurrencyComponent,
    HomeNewsComponent,
    HomeFooterComponent,
    HomeGiveAwayComponent,
    ChatComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule
  ],
})
export class HomeModule {}