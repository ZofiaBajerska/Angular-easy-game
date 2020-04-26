import { Component, OnInit } from '@angular/core';
import {CurrencyClientService, RootObject} from '../../services/currency-client.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  messageForUser: string;
  rootObject: RootObject;
  result: string;

  constructor(private currencyClientService: CurrencyClientService) {
  }

  ngOnInit(): void {
    this.currencyClientService.getCurrency().subscribe(value => {
      this.rootObject = value;
    });
  }

  sayHello(value: string) {
    this.messageForUser = 'cześć ' + value;
  }

  check(value: string) {
    if (value > this.rootObject.rates.PLN) {
      this.result = 'podałeś zbyt wysoką wartość';
    } else if (value < this.rootObject.rates.PLN) {
      this.result = 'podałeś zbyt niską wartość';
    } else {
      this.result = 'udało się, gratulacje!';
    }
  }
}
