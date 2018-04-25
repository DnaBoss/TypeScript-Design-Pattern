import { Car } from "../abstract/Car"
export class Boxter extends Car {
    installEngine() {/*想怎麼實作就怎麼實作，你家的事 */ }
    installWheel() {/*想怎麼實作就怎麼實作，你家的事 */ }
    run() { console.log('Boxter 帥氣的奔馳') }
}