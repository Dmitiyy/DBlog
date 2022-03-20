import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeCardComponent } from "./home-card/home-card.component";
import { HomeSectionComponent } from './home-section/home-section.component';
import { HomeTubeComponent } from "./home-tube/home-tube.component";
import { HomeTubeDirective } from "./home-tube/home-tube.directive";
import { TransformPlatforms } from "./transform-platforms.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [
    HomeSectionComponent, 
    HomeCardComponent, 
    HomeTubeComponent,
    HomeTubeDirective,
    TransformPlatforms
  ],
  exports: [CommonModule, HomeSectionComponent, HomeTubeComponent]
})
export class SharedModule {}