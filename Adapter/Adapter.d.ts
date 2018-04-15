interface UsbAble {
    useUsb: Function;
}
declare class Computer implements UsbAble {
    useUsb(): void;
}
interface TypeCAble {
    useTypeC: Function;
}
declare class iPhone implements TypeCAble {
    useTypeC(): void;
}
declare class TypeCAdapter implements UsbAble {
    private typeCObject;
    constructor(typeCObject: TypeCAble);
    useUsb(): void;
}
declare let computer: Computer;
declare let iPhone7: iPhone;
declare let typecAdapter: UsbAble;
declare class SuperiPhone implements TypeCAble {
    useTypeC(): void;
}
declare let iPhoneX: SuperiPhone;
declare let superAdapter: UsbAble;
