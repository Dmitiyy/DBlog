import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[homeTube]'
})
export class HomeTubeDirective implements OnInit {
  @Input() homeTube: {color: string, mTop: number} = {color: '', mTop: 60};

  constructor(
    private element: ElementRef<HTMLDivElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.homeTube.color);
    this.renderer.setStyle(
      this.element.nativeElement, 'margin-top', `${this.homeTube.mTop}px`
    );
  }
}