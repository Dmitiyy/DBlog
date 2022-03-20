import { state, style, trigger, transition, animate } from "@angular/animations";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.sass'],
  animations: [
    trigger('cardAnimation', [
      state('close', style({
        opacity: '0'
      })),
      state('open', style({
        opacity: '1'
      })),
      transition('close <=> open', [animate(300)])
    ])
  ]
})
export class HomeCardComponent implements OnInit {
  @Input() cardImage: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescr: string = '';
  @Input() cardTypes: string[] = [];
  @Input() cardLink: string = '';

  animationState: string = 'close';

  ngOnInit(): void {
    setTimeout(() => this.onAnimate());
  }

  onAnimate() {
    this.animationState = this.animationState === 'open' ? 'close' : 'open';
  }
}