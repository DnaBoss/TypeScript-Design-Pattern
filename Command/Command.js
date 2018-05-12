// 具體　recever 
class Vladimir {
    //英雄聯盟中的知名角色，玩家一般都直接稱呼他為吸血鬼
    CastQ() { console.log('Vladimir使用鮮血轉換'); }
    CastW() { console.log('Vladimir使用血紅之池'); }
    CastE() { console.log('Vladimir使用血之潮汐'); }
    CastR() { console.log('Vladimir使用血之瘟疫'); }
}
class CharacterCastQ {
    setCharacter(character) {
        this.character = character;
    }
    execute() {
        this.character.CastQ();
    }
}
class CharacterCastW {
    setCharacter(character) {
        this.character = character;
    }
    execute() {
        this.character.CastW();
    }
}
class CharacterCastE {
    setCharacter(character) {
        this.character = character;
    }
    execute() {
        this.character.CastE();
    }
}
class CharacterCastR {
    setCharacter(character) {
        this.character = character;
    }
    execute() {
        this.character.CastR();
    }
}
// invoker 
class SummonerRift {
    setCommand(command) {
        this.request = command;
    }
    cast() {
        this.request.execute();
    }
}
// 大部份時後，invoker　會由　client 創建出來，但我們在UML中不會看到這點，因為他不是絕對的
let summonerRift = new SummonerRift();
//接收者是由 client 創建的
let vladimir = new Vladimir();
//創建命令，並把接收者當成參數傳進去
let CastQ = new CharacterCastQ();
CastQ.setCharacter(vladimir);
let CastW = new CharacterCastW();
CastW.setCharacter(vladimir);
let CastE = new CharacterCastE();
CastE.setCharacter(vladimir);
let CastR = new CharacterCastR();
CastR.setCharacter(vladimir);
// 將命令委派給 summonerRift
summonerRift.setCommand(CastQ);
summonerRift.cast();
summonerRift.setCommand(CastW);
summonerRift.cast();
summonerRift.setCommand(CastE);
summonerRift.cast();
summonerRift.setCommand(CastR);
summonerRift.cast();
// 整個模式會讓新手覺得奇怪的地方是，為什麼要把方法升級成類別
// 簡單的說是 將命令 交給 invoker 讓 invoker 對 receiver 呼叫方法
// 如此一來，實際上 要怎麼執行，是被寫在具體角色的類別，
// 在這裡，也就是弗拉迪米爾，當然也可以是其它具體的角色
// 執行了什麼 是什麼角色執行的， summonerRift 也不會知道
//# sourceMappingURL=Command.js.map