interface IHuman {
    attack(): void;
}
declare class TonyStark implements IHuman {
    name: string;
    constructor();
    attack(): void;
}
declare class IronMan extends TonyStark {
    private _stark;
    constructor(_stark: IHuman);
    attack(): void;
}
declare class HulkBuster extends TonyStark {
    private _stark;
    constructor(_stark: IHuman);
    attack(): void;
}
declare var stark: IHuman;
