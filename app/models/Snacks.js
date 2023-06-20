export class Snack {
  constructor(data) {

    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get snackTemplate() {
    return /*html*/ `
    <div class="col-4 m-auto">
        <div class="bg-secondary text-center">
          <img class="chips-img py-3"
            src="${this.imgUrl}"
            alt="">
          <p>${this.name}</p>
          <p>Price:$${this.price}</p>
          <button class="btn btn-success p-1 mb-2" onclick="app.SnacksController.buySnack('${this.name}')">Buy ${this.name}</button>
        </div>
      </div>`
  }

}