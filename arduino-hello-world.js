import { Board, Led } from "johnny-five";
const board = new Board()

const strobe13 = () => {
  const led = new Led(13)
  led.blink(1000)
}

board.on('ready', strobe13)