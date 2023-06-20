import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";




function _drawMoney() {
  let stringOfMoney = ''

  for (let i = 0; i < AppState.money; i++) {
    stringOfMoney
  }

  stringOfMoney += AppState.money.toFixed(2)

  setText('totalMoney', stringOfMoney)
}

export class MoneyController {
  constructor() {
    AppState.on('money', _drawMoney)
  }

  addMoney() {
    moneyService.addMoney()
    // _drawMoney()
  }
}


