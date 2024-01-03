import { Component } from '@angular/core';

@Component({
  selector: 'app-sixgame',
  templateUrl: './sixgame.component.html',
  styleUrl: './sixgame.component.scss',
})
export class SixgameComponent {
  grid = this.generateGrid();
  flippedCards: { clickedCard: { value: string; flipped: boolean; disp: boolean }; row: number; col: number }[] = [];
  isFlippingAllowed = true;
  showPlayAgainButton: boolean = false;
  moves: number = 0;
  correctMoves: number = 0;
  totalGamesPlayed: number = 0;

  generateGrid(): { value: string; flipped: boolean; disp: boolean }[][] {
    const values = this.generateValues();
    const grid = [];

    for (let i = 0; i < 2; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        const index = i * 2 + j;
        row.push({ value: values[index], flipped: false, disp: true });
      }
      grid.push(row);
    }

    return grid;
  }

  generateValues(): string[] {
    const values = ['A', 'B', 'C', 'A', 'B', 'C'];
    return [...values, ...values];
  }

  onCardClick(clickedCard: { value: string; flipped: boolean; disp: boolean }, row: number, col: number) {
    if (this.isFlippingAllowed && !clickedCard.flipped && this.flippedCards.length < 2) {
      clickedCard.flipped = true;
      this.flippedCards.push({clickedCard, row, col });
      if (this.flippedCards.length === 2) {
        this.moves++;
        this.isFlippingAllowed = false;
        setTimeout(() => {
          this.checkMatch();
          this.flippedCards.forEach(element => {
            element.clickedCard.flipped = false;
          });
          this.flippedCards = [];
          this.isFlippingAllowed = true;
        }, 500);
      }
    } 
  }

  checkMatch() {
    if (
      this.flippedCards[0].clickedCard.value === this.flippedCards[1].clickedCard.value
    ) {
      this.grid[this.flippedCards[0].row][this.flippedCards[0].col].flipped = true;
      this.grid[this.flippedCards[1].row][this.flippedCards[1].col].flipped = true;
      this.grid[this.flippedCards[0].row][this.flippedCards[0].col].disp = false;
      this.grid[this.flippedCards[1].row][this.flippedCards[1].col].disp = false;
      this.correctMoves++;

      this.showPlayAgainButton = this.grid.every(row =>
        row.every(card => !card.disp)
      );

      if (this.showPlayAgainButton) {
        // Increment the totalGamesPlayed count
        this.totalGamesPlayed++;
      }
    }
  }

  playAgain() {
    // Add logic to reset the game state
    this.grid = this.generateGrid();
    this.showPlayAgainButton = false;
    this.grid.forEach(row => row.forEach(card => (card.flipped = false)));
    this.isFlippingAllowed = true; // Reset any other state variables
    this.flippedCards = [];
    this.moves = 0;
    this.correctMoves = 0;
  }
}
