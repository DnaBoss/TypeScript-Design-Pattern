class Car {
}
class Porsche911 extends Car {
    installEngine() { }
    installWhell() { }
    run() { console.log('Porsche911 帥氣的奔馳'); }
}
class Boxter extends Car {
    installEngine() { }
    installWhell() { }
    run() { console.log('Boxter 帥氣的奔馳'); }
}
class Cayenne extends Car {
    installEngine() { }
    installWhell() { }
    run() { console.log('Cayenne 帥氣的奔馳'); }
}
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
//         this.car.installWhell();
//         return this.car;
//     }
// }
// class SimpleCarFactory {
//     car: Car;
//     createCar(type: string) {
//         if (type === '911') {
//             this.car = new Porsche911();
//         }
//         else if (type === 'boxter') {
//             this.car = new Boxter();
//         }
//         else if (type === 'cayenne') {
//             this.car = new Cayenne();
//         }
//         return this.car;
//     }
// }
class SimpleCarFactory {
    createCar(type) {
        let model = {
            '911': new Porsche911(),
            'boxter': new Boxter(),
            'cayenne': new Cayenne(),
        };
        return model[type];
    }
}
class CarStore {
    constructor(factory) {
        this.factory = factory;
    }
    orderCar(type) {
        this.car = this.factory.createCar(type);
        this.car.installEngine();
        this.car.installWhell();
        return this.car;
    }
}
/**
 * SimpleCarFactory 負責 車子的生造、建造
 * 更精確的說 負責「實例化」 讓工廠去負責 new 一個類別，產生實例
 * 而 CarStore 負則使用
 * 要什麼樣子的車，是外部輸入的，真正的車子是工廠給的
 * 門市 接受訂單 交給工廠 不管交回來的車子是什麼型號，都只執行一樣的步驟、方法
 * 有新的車型出來，再去 工廠新增一個判斷
 * CarStore 透過 SimpleCarFactory 取得 具體的 Car
 * 這就是簡單工廠，沒什麼好說的，因為它就是「簡單」
 * 但卻實實在在的經常被使用
*/
let factory = new SimpleCarFactory();
let store = new CarStore(factory);
let car = store.orderCar("911");
car.run();
//# sourceMappingURL=SimpleFactory.js.map