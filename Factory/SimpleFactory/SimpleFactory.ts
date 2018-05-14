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
// 將工廠類別內的 if else 所產生的類別，裝到一個容器內，用鍵值對的方式取用

// class SimpleCarFactory {
//     car: Car;
//     createCar(type: string): Car {
//         let model: { [Type: string]: Car } = {
//             'Porsche911': new Porsche911(),
//             'boxter': new Boxter(),
//             'cayenne': new Cayenne(),
//         }
//         return model[type]
//     }
// }
// 再將model 搬到一個 config 或容器
import { Car } from "./abstract/Car";
import { Container } from "./Container";

class SimpleCarFactory {
    car: Car;
    createCar(typeName: string) {
         return new Container[typeName]();
    }
}
// 從此之後，要新增車子的種類 也不用在工廠或Store裡做任何更動
// 只要寫好新的類別，並且在 Config(此處是 Container.ts) 做新增即可
class CarStore {
    car: Car;
    factory: SimpleCarFactory;
    constructor(factory: SimpleCarFactory) {
        this.factory = factory;
    }
    orderCar(type: string): Car {
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
 * 有新的車型出來，是到config(此處是 Container) 設定新的 車子類別的路徑，完全的對修改封閉了。
 * CarStore 透過 SimpleCarFactory 取得 具體的 Car
 * 這就是簡單工廠，沒什麼好說的，因為它就是「簡單」
 * 但卻實實在在的經常被使用
*/

let factory: SimpleCarFactory = new SimpleCarFactory();
let store: CarStore = new CarStore(factory);
let car = store.orderCar("Porsche911");
car.run(); //Porsche911 帥氣的奔馳
car = store.orderCar("Cayenne");
car.run(); //Cayenne 帥氣的奔馳
car = store.orderCar("Boxter");
car.run(); //Boxter 帥氣的奔馳