import { Board, Led, Button } from 'johnny-five';
const board = new Board()

const randomNumber = max => () =>  Math.floor(Math.random() * max)
const randomBetweenZeroAnd255 = randomNumber(255)
const intToHex = int => int.toString(16)
const getRandomHex = () => intToHex(randomBetweenZeroAnd255())

const getRandomRgbObj = () => ({
  red: `0x${getRandomHex()}`,
  green: `0x${getRandomHex()}`,
  blue: `0x${getRandomHex()}`,
})

const initChangeColourButton = rgbLed => {
  const button = new Button(2);
  button.on("release", () => rgbLed.color(getRandomRgbObj()))
}

const initRgbLed = () => {
  const rgbLed = new Led.RGB({ pins: { red: 11, green: 9, blue: 10 } })
  rgbLed.color(getRandomRgbObj())

  return rgbLed
}

const app = () => initChangeColourButton(initRgbLed())

board.on('ready', app)