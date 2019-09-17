import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.scss']
})
export class TemplateSyntaxComponent {
  userName = '';

  @ViewChild('userInput', {static: false}) userInputRef: ElementRef;
  @ViewChild('randomColoredBlock', {static: false}) randomColoredBlock: ElementRef;

  onKeyUp(event: KeyboardEvent) {
    console.log(event);
  }

  generateColor() {
    const color = this.getRandomColor();

    this.randomColoredBlock.nativeElement.style.background = color;
    this.randomColoredBlock.nativeElement.style.borderColor = color;
  }

  private getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}
