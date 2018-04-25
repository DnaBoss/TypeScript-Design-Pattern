import { Car } from "../abstract/Car"
export class Porsche911 extends Car {
    installEngine() {/*想怎麼實作就怎麼實作，你家的事 */ }
    installWheel() {/*想怎麼實作就怎麼實作，你家的事 */ }
    run() { console.log('Porsche911 帥氣的奔馳') }
}