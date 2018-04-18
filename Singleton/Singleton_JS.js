/**
 * 你可能曾經在網路上查找 javascript　的單例模式
 * 然後找到了這個網址　https://github.com/zhiqiang21/blog/issues/18
 * 他說是讀書筆記，但他完全就只是把　某本書的內容照抄（我也有買那本書），
 * 重點是，他還抄錯了，爛透了。
 * 
 * 
*/

//　記住一件事，用匿名函數有二個重點　１.函數的name屬性會是undefined 2.此函數會沒有建構式
var Singleton = function (name) {
    this.name = name;
}
//用一個IIEF　讓　getInstance　直接產生閉包，形成單例，在golang　也可以用這個方法
Singleton.getInstance = (name => {
    var instance;
    return name => instance = instance ? instance : new Singleton(name);
})();

var a = Singleton.getInstance('cash');
var b = Singleton.getInstance('ivy');

console.log(a === b); 