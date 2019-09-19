import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HighlightOnHoverDirective {
  @HostBinding('attr.aria-label') public label = 'This is an aria-label';

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  @HostListener('mouseenter')
  public onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }

}
