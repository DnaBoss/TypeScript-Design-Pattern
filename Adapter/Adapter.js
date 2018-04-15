//Target 的具體實作 
class Computer {
    useUsb() {
        console.log(' Usb 被連接上啦!!!!');
    }
}
// adaptee 被 轉接者
class iPhone {
    useTypeC() {
        console.log(' iPhone 的 TypeC 被接上啦!!!!');
    }
}
//adapter 轉接器實作目標介面，但骨子裡還是執行接收物件的介面
class TypeCAdapter {
    constructor(typeCObject) {
        this.typeCObject = typeCObject;
    }
    useUsb() {
        this.typeCObject.useTypeC();
    }
}
//client 
let computer = new Computer();
let iPhone7 = new iPhone();
computer.useUsb();
iPhone7.useTypeC();
let typecAdapter = new TypeCAdapter(iPhone7);
typecAdapter.useUsb();
//轉接器與狀飾者差異在於 轉接器改變介面 而裝飾者 每一次裝飾都是相同的介面
// 物件轉接器的好處在於，將來如果我有一台iPhoneX
// 只要它還是有實作 TypeCAble 就能繼續用這個物件轉接器 
// EX:
class SuperiPhone {
    useTypeC() {
        console.log(' iPhone 的 TypeC 被接上啦!!!!');
    }
}
let iPhoneX = new SuperiPhone();
let superAdapter = new TypeCAdapter(iPhoneX);
superAdapter.useUsb();
//# sourceMappingURL=Adapter.js.map