class Singleton {
    //把建構式設成　private　讓外部無法自行實例化
    constructor() { }
    static getInstance() {
        return this._instance = this._instance || new Singleton();
    }
}
let test1 = Singleton.getInstance();
let test2 = Singleton.getInstance();
// console.log(typeof test1)//Object
// console.log(typeof test2)//Object
console.log('test1 === test2 ? ', test1 === test2); //true
/**
 * 因為　node.js 是單執行緒，所以，這個單例就完全夠用了，沒有執行緒安全的問題
 * 在　javascript　裡　二個 Object 邏輯相等，則這二個物件必然是引用到了同一個參考
 * 單例模式是最常用、最簡單的模式
 * 當我希望這個類別，在全局中只存在一個實體的時後，就用單例模式
 * 相信我，你會很常、很少用到這個模式
 * 順帶一提　node.js 的　require 就是單例
*/ 
//# sourceMappingURL=Singleton.js.map