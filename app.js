import { Gpio } from 'onoff'

const pin18 = new Gpio(18, 'out')

const blink = () => pin18.writeSync(pin18.readSync() === 0 ? 0 : 1)

const stop = () => {
  clearInterval(blinkInterval)
  pin18.writeSync(0)
  pin18.unexport()
}

const blinkInterval = setInterval(blink, 250)
setTimeout(stop, 5000)