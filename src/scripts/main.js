// Imports go first
import { firePottery } from "./Kiln.js"
import { makePottery } from "./PotteryWheel.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 8)
console.log(mug)
let plate = makePottery("plate", 4, 1)
console.log(plate)
let statue = makePottery("statue", 15, 20)
console.log(statue)
let goblet = makePottery("goblet", 3, 6)
console.log(goblet)
let finger = makePottery("finger", 2, 2)
console.log(finger)


// Fire each piece of pottery in the kiln

let firedMug = firePottery(mug, 2300)
console.log(firedMug)

let firedPlate = firePottery(plate, 2100)
console.log(firedPlate)

let firedStatue = firePottery(statue, 2400)
console.log(firedStatue)

let firedGoblet = firePottery(goblet, 2200)
console.log(firedGoblet)

let firedFinger = firePottery(finger, 900)
console.log(firedFinger)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



