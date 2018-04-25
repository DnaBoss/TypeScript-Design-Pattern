/**
 * 樣版模式最經典的範例就是咖啡跟茶的那個例子了
 * 我想舉其它的例子，但都沒有這個例子來得簡單好懂
 *
 * 首先想想泡茶跟泡咖啡的「流程」
 *
 * 拿鐵：
 * １把水煮沸
 * ２沖泡咖啡
 * ３把咖啡倒進杯子
 * ４加糖和奶精
 *
 * 檸檬紅茶：
 * １把水煮沸
 * ２沖泡咖啡
 * ３把茶倒進杯子
 * ４加檸檬
 */
// 分別建立茶和咖啡二種類別
class Coffe {
    recipe() {
        this.boilWater();
        this.brewCoffe();
        this.pourInCup();
        this.addMilk();
    }
    boilWater() {
        console.log('boil water');
    }
    brewCoffe() {
        console.log('brewCoffe');
    }
    pourInCup() {
        console.log('pourInCup');
    }
    addMilk() {
        console.log('addMilk');
    }
}
class Tea {
    recipe() {
        this.boilWater();
        this.brewTea();
        this.pourInCup();
        this.addLemon();
    }
    boilWater() {
        console.log('boil water');
    }
    brewTea() {
        console.log('brewTea');
    }
    pourInCup() {
        console.log('pourInCup');
    }
    addLemon() {
        console.log('addLemon');
    }
}
/**
 * 有沒有發現　二個類別要做的事都很像，甚至四個step中
 * 有二個step　根本就一樣
 * 這種時候，可以把相同的部份抽取出來，
 * 用一個abstract　類別　直接實作相同的方法
 * 而那些有細微差異的，則設成抽像方方，讓子類別繼承後各自實作
*/
class Beverages {
    //子類一定要按照這個演算法（步驟）來沖泡飲料
    recipe() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiment();
    }
    //　燒熱水和倒速杯子這種完全一樣的方法, 就在 abstract裡實作讓子類別繼承
    boilWater() {
        console.log('boil water');
    }
    pourInCup() {
        console.log('pourInCup');
    }
}
class LatteCoffe extends Beverages {
    brew() {
        console.log('brewCoffe');
    }
    addCondiment() {
        console.log('addMilk');
    }
}
class LemonTea extends Beverages {
    brew() {
        console.log('brewTea');
    }
    addCondiment() {
        console.log('addLemon');
    }
}
/**
 * 為了讓樣版更具彈性，通常會加入hook
 * hook　就是在抽像的樣版類別中，再加入一個供子類別實作的方法
 * 用來決定　一連串的流程中，某些（步驟）　要不要被執行
 * 通常，只會用１～２個hook
 * 如果一堆hook的話，整個模式我覺得就變的很亂
 * 尤其當繼承樣版的子類別很多的時後，根本就難以確認（步驟）到底有沒有被執行
 * 這裡就只介紹到這樣
*/
//client
let latte = new LatteCoffe();
let tes = new LemonTea();
latte.recipe();
// boil water
// brewCoffe
// pourInCup
// addMilk
console.log('泡完拿鐵來泡茶');
tes.recipe();
// boil water
// brewTea
// pourInCup
// addLemon
//# sourceMappingURL=Template.js.map