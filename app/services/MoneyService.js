import { AppState } from "../AppState.js";

class MoneyService {
  addMoney() {
    AppState.money = (AppState.money + 0.25)
  }
}

export const moneyService = new MoneyService()