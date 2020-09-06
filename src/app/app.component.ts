import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-Angular';
  togle = true;

  cards: Card[] = [
    {title: 'Card ', text: 'This is card number 1'},
    {title: 'Card 2', text: 'This is card number 2'},
    {title: 'Card 3', text: 'This is card number 3'},
  ];

  togleCards() {
    this.togle = !this.togle;
  }

}
