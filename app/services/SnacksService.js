import { SnacksController } from "../controllers/SnacksController.js";
import { Snack } from "../models/Snacks.js";
import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";


class SnacksService {
  buySnack(snackName) {

    let snack = AppState.snacks.find(snack => snack.name == snackName)

    // @ts-ignore
    if (AppState.money < snack.price) {
      Pop.error('Not enough money!')
      return
    }

    // @ts-ignore
    // AppState.money = AppState.money - snack.price
    AppState.money -= snack?.price
  }





}

export const snacksService = new SnacksService()