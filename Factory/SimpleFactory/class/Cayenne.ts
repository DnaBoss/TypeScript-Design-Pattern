import { Car } from "../abstract/Car"
export class Cayenne extends Car {
    installEngine() {/*想怎麼實作就怎麼實作，你家的事 */ }
    installWheel() {/*想怎麼實作就怎麼實作，你家的事 */ }
    run() { console.log('Cayenne 帥氣的奔馳') }
}