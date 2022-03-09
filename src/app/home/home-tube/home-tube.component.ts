import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-home-tube',
  templateUrl: './home-tube.component.html',
  styleUrls: ['./home-tube.component.sass']
})
export class HomeTubeComponent {
  @Input() mt: number = 60;
  @Input() color: string = '';
}