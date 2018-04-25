"use strict";
// class CarStore {
//     car: Car;
//     orderCar(type: string) {
//         if (type === '911') {
//             this.car = new Porsche911();
//         }
//         else if (type === 'boxter') {
//             this.car = new Boxter();
//         }
//         else if (type === 'cayenne') {
//             this.car = new Cayenne();
//         }
//         this.car.installEngine();
//         this.car.installWheel();
//         return this.car;
//     }
// }
// 把 orderCar方法裡的 if else ，搬到工廠類別
//
Object.defineProperty(exports, "__esModule", { value: true });
const Container_1 = require("./Container");
class SimpleCarFactory {
    createCar(typeName) {
        return new Container_1.Container[typeName]();
    }
}
// 從此之後，要新增車子的種類 也不用在工廠或Store裡做任何更動
// 只要寫好新的類別，並且在 Config(此處是 Container.ts) 做新增即可
class CarStore {
    constructor(factory) {
        this.factory = factory;
    }
    orderCar(type) {
        this.car = this.factory.createCar(type);
        this.car.installEngine();
        this.car.installWheel();
        return this.car;
    }
}
/**
 * SimpleCarFactory 負責 車子的生造、建造
 * 更精確的說 負責「實例化」 讓工廠去負責 new 一個類別，產生實例
 * 而 CarStore 負責使用
 * 要什麼樣子的車，是外部輸入的，真正的車子是工廠給的
 * 門市 接受訂單 交給工廠 不管交回來的車子是什麼型號，都只執行一樣的步驟、方法
 * 有新的車型出來，再去 工廠新增一個判斷
 * CarStore 透過 SimpleCarFactory 取得 具體的 Car
 * 這就是簡單工廠，沒什麼好說的，因為它就是「簡單」
 * 但卻實實在在的經常被使用
*/
let factory = new SimpleCarFactory();
let store = new CarStore(factory);
let car = store.orderCar("Porsche911");
car.run(); //Porsche911 帥氣的奔馳
car = store.orderCar("Cayenne");
car.run(); //Cayenne 帥氣的奔馳
car = store.orderCar("Boxter");
car.run(); //Boxter 帥氣的奔馳
//# sourceMappingURL=SimpleFactory.js.map