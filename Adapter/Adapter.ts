//物件轉接器
// Target 介面
interface UsbAble {
    useUsb: Function
}

//Target 的具體實作 
class Computer implements UsbAble {
    useUsb() {
        console.log(' Usb 被連接上啦!!!!')
    }
}

// 被 轉接者 介面
interface TypeCAble {
    useTypeC: Function;
}

// adaptee 被 轉接者
class iPhone implements TypeCAble {
    useTypeC() {
        console.log(' iPhone 的 TypeC 被接上啦!!!!')
    }
}

//adapter 轉接器實作目標介面，但骨子裡還是執行接收物件的介面
class TypeCAdapter implements UsbAble {
    private typeCObject: TypeCAble;
    constructor(typeCObject: TypeCAble) {
        this.typeCObject = typeCObject;
    }
    useUsb() {
        this.typeCObject.useTypeC();
    }
}

//client 
let computer: Computer = new Computer();
let iPhone7: iPhone = new iPhone();

computer.useUsb();
iPhone7.useTypeC();

let typecAdapter: UsbAble = new TypeCAdapter(iPhone7);
typecAdapter.useUsb();

//轉接器與狀飾者差異在於 轉接器改變介面 而裝飾者 每一次裝飾都是相同的介面

// 物件轉接器的好處在於，將來如果我有一台iPhoneX
// 只要它還是有實作 TypeCAble 就能繼續用這個物件轉接器 
// EX:
class SuperiPhone implements TypeCAble {
    useTypeC() {
        console.log(' iPhone 的 TypeC 被接上啦!!!!')
    }
}
let iPhoneX: SuperiPhone = new SuperiPhone();
let superAdapter: UsbAble = new TypeCAdapter(iPhoneX);
superAdapter.useUsb();