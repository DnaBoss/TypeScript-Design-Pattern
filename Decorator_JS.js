var Stark = function (name) { this.name = name }
Stark.prototype.Attack = function () { console.log(`使用拳頭攻擊`) }

//IronMan 其實就是TS 版本的class，同時也是裝飾器，裝飾史塔克這個物件 
var IronMan = function (stark) { this.stark = stark }
IronMan.prototype.Attack =function (){console.log(`使用空氣砲攻擊`)};

IronMan.prototype.AutoMissile=function (){console.log(`使用自動瞄準飛彈射擊`)};

var HulkBuster = function (stark) { this.stark = stark }
HulkBuster.prototype.Attack = function (){console.log(`對浩克打出強力一擊`)};


var stark = new Stark('東尼史塔克')
stark.Attack();

iron = new IronMan(stark);

iron.Attack();
iron.AutoMissile();

buster = new HulkBuster(iron);
buster.Attack();
