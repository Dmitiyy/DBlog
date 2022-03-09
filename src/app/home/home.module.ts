import { NgModule } from "@angular/core";
import { HomeCurrencyComponent } from "./home-currency/home-currency.component";
import { HomeHeaderComponent } from "./home-header/home-header.component";
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
    HomeCurrencyComponent
  ],
  imports: [
    HomeRoutingModule,
  ],
})
export class HomeModule {}