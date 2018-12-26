import { Gpio } from 'onoff'

const pin18 = new Gpio(18, 'out')

const say = message => console.log(message)

const blink = () => {
  const newState = pin18.readSync() === 0 ? 0 : 1;
  pin18.writeSync(newState)
  return newState
}

const stop = () => {
  clearInterval(blinkInterval)
  pin18.writeSync(0)
  pin18.unexport()
}

const app = () => {
  const state = blink()
  say(`Turned LED ${state ? 'on' : 'off'}`)
}

const blinkInterval = setInterval(app, 250)
setTimeout(stop, 5000)