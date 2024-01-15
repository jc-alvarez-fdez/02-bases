import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class mainPageComponent {
  constructor() { }

  public characters: Character [] = [
    {
    name: "Krillin",
    power: 100
    },
    {
      name: "Goku",
      power: 9500
    },
    {
      name: "Vegeta",
      power: 7500
    }
  ];

  onNewCharacter(character: Character): void {
    console.log("Main page");
    console.log(character);

  }

}
