class TonyStark {
    constructor() {
        this.name = '東尼史塔克';
    }
    attack() {
        console.log(`${this.name}使用拳頭攻擊`);
    }
}
class IronMan extends TonyStark {
    constructor(_stark) {
        super();
        this._stark = _stark;
    }
    attack() {
        console.log(`${this.name}使用空氣砲攻擊`);
    }
}
//浩克毀滅者，電影中加裝在鐵鋼衣上的超大型鐵鋼裝
class HulkBuster extends TonyStark {
    constructor(_stark) {
        super();
        this._stark = _stark;
    }
    attack() {
        console.log(`${this.name}使用超強空氣砲攻擊`);
    }
}
var stark = new TonyStark();
//此時的東尼史塔克只是肉體之軀
stark.attack();
//讓東尼史塔克穿上鋼鐵衣
stark = new IronMan(stark);
stark.attack();
//穿上鋼鐵衣的東尼史塔穿，穿上浩克毀滅者(超大鋼鐵衣)
stark = new HulkBuster(stark);
stark.attack();
//# sourceMappingURL=Decorator.js.map