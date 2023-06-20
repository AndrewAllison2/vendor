import { AppState } from "../AppState.js";
import { Snack } from "../models/Snacks.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML } from "../utils/Writer.js";


function _drawSnacks() {
  const snack = AppState.snacks

  let template = ''

  snack.forEach(s => template += s.snackTemplate)
  setHTML('snackTemplate', template)
    ;
}

export class SnacksController {
  constructor() {
    console.log(AppState.snacks);
    _drawSnacks()
  }


  buySnack(snackName) {
    snacksService.buySnack(snackName)
  }
}