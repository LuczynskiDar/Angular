import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Angular';
  myExtremeNiceValue = 'Hello World, Witaj Swiecie';
  myLovelyInputValue = '';
  myValueLength = '';
  mouseMove = 'A';

  onClick() {
    console.log('Naciskam przycisk i sprawdzam czy consola wyswietla');
  }
  onKeyUp(event) {
    console.log(event.key);
  }
  getLenght(value) {

    console.log(value);
  }

  onKeyUp2(value) {
    console.log(value);
  }

  onMouseOver() {
    console.log(this.mouseMove);
  }
}
