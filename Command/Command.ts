interface ICommand {
    execute(): void;
}

//　抽像　recever
interface ICharacter {
    // 真正在寫的這個介面（抽像）的時後，可能會有角色level及每個技能level、hp、法傷、跑速、物攻等等的屬性
    //　這裡只是示範，簡單的只列出四個招式對應的按鍵
    CastQ(): void;
    CastW(): void;
    CastE(): void;
    CastR(): void;
}

// 具體　recever 
class Vladimir implements ICharacter {
    //英雄聯盟中的知名角色，玩家一般都直接稱呼他為吸血鬼
    CastQ() { console.log('Vladimir使用鮮血轉換') }
    CastW() { console.log('Vladimir使用血紅之池') }
    CastE() { console.log('Vladimir使用血之潮汐') }
    CastR() { console.log('Vladimir使用血之瘟疫') }
}

class CharacterCastQ implements ICommand {

    character: ICharacter;
    setCharacter(character: ICharacter) {
        this.character = character;
    }
    execute() {
        this.character.CastQ();
    }
}

class CharacterCastW implements ICommand {

    character: ICharacter;
    setCharacter(character: ICharacter) {
        this.character = character;
    }
    execute() {
        this.character.CastW();
    }
}

class CharacterCastE implements ICommand {

    character: ICharacter;
    setCharacter(character: ICharacter) {
        this.character = character;
    }
    execute() {
        this.character.CastE();
    }
}

class CharacterCastR implements ICommand {

    character: ICharacter;
    setCharacter(character: ICharacter) {
        this.character = character;
    }
    execute() {
        this.character.CastR();
    }
}

// invoker 
class SummonerRift {
    //　實務上　SummonerRift　可能需要包含多種模式、類別(也可能不用）
    //  需要負責接收命令、儲存命令、判斷(定)命令、執行命令、回傳結果
    // 　request　應該會是一個可迭代的容器，收到　command　後，將　command 加入　容器
    //  而cast 也不會被　client 呼叫，而是　GameServer 自己有一套機制決定怎麼樣去執行收到的Command
    //　但在這裡，我只想演示命令模式　所以簡化這層關系
    request: ICommand;
    setCommand(command: ICommand) {
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
CastQ.setCharacter(vladimir)
let CastW = new CharacterCastW();
CastW.setCharacter(vladimir)
let CastE = new CharacterCastE();
CastE.setCharacter(vladimir)
let CastR = new CharacterCastR();
CastR.setCharacter(vladimir)
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
