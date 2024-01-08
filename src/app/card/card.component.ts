import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() value: string = '';
  @Input() flipped: boolean = false;
  @Input() disp: boolean = true;
  @Output() cardClicked = new EventEmitter<{ value: string; flipped: boolean }>();
  getImagePath(): string {
    // Assuming you have images named 'A.jpg', 'B.jpg', 'C.jpg', etc.
    return `assets/${this.value}.png`;
  }

  flipCard() {
    if (!this.flipped) {
      this.cardClicked.emit({ value: this.value, flipped: this.flipped });
    }
  }
}
