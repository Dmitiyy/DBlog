import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.sass']
})
export class HomeCardComponent {
  @Input() cardImage: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescr: string = '';
  @Input() cardTypes: string[] = [];
}