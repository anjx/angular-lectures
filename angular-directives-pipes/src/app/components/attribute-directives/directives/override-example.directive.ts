import { Directive, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[propToOverride]'
})
export class OverrideExampleDirective implements OnChanges {
  @Input('propToOverride') prop: string;
  @Input() color: string;
  @Input() innerHTML: string;

  public ngOnChanges(): void {
    console.log('OverrideExampleDirective has changed');
    console.log('this.prop -> ', this.prop);
    console.log('this.color -> ', this.color);
    console.log('this.innerHTML -> ', this.innerHTML);
  }
}
