
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"
import { Snack } from "./models/Snacks.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  money = 0

  /** @type {import('./models/Snacks.js').Snack[]} */
  snacks = [
    new Snack({ name: 'Chips', price: 2, imgUrl: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpcHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' },),
    new Snack({ name: 'Candy Bar', price: 1.5, imgUrl: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuZHklMjBiYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Peanuts', price: 1, imgUrl: 'https://media.istockphoto.com/id/610957954/photo/mixed-nuts-shelled.webp?b=1&s=170667a&w=0&k=20&c=NDMcWDTR3DVOTCb3cCdGYxJ9aLgXaauM9jfpxnwKVKE=' }),
    new Snack({ name: 'Cake', price: 5, imgUrl: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Pop Tarts', price: 1.75, imgUrl: 'https://plus.unsplash.com/premium_photo-1663853560438-6cc3a70a3c97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9wJTIwdGFydHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Meatballs', price: 7.75, imgUrl: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVhdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Burrito', price: 4, imgUrl: 'https://media.istockphoto.com/id/1361612471/photo/a-burrito-with-dips-cut-in-half-on-a-wooden-board.webp?b=1&s=170667a&w=0&k=20&c=wgGIr5Yu9yu8XffLfI440O3bntldqPlY8sVWWGEIlBM=' }),
    new Snack({ name: 'Lobster', price: 9, imgUrl: 'https://media.istockphoto.com/id/117149629/photo/close-up-of-fresh-steamed-lobster-with-herbs-in-grey-plate.webp?b=1&s=170667a&w=0&k=20&c=xVbkX_bjAhvRKcUNKMjzrm5fTGyew28xWZ5IiO4nZk8=' }),
    new Snack({ name: 'Understanding MVC', price: 100, imgUrl: 'https://media.istockphoto.com/id/1455345645/photo/bearded-hispanic-man-in-red-sweater-frowning-and-looking-dissatisfied-while-scratching-his.webp?b=1&s=170667a&w=0&k=20&c=MeGD5RELr9nx78aQCB5cFAonkmpVYVEY5baQObpucWE=' }),
  ]

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
