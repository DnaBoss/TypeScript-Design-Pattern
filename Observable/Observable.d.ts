interface IObservable {
    subscribe: Function;
    unsubscribe: Function;
    publish: Function;
}
interface ISubscriber {
    receive: Function;
}
declare class User implements ISubscriber {
    userID: number;
    constructor(userID: number);
    receive(data: any): void;
}
declare class Server implements IObservable {
    private subscribers;
    constructor();
    subscribe(user: User, channel: string): void;
    unsubscribe(user: User, channel: string): void;
    publish(data: string, channel: string): void;
    private existChannel(channel);
    private creatChannel(channel);
    private existUser(user, channel);
    private remove(user, channel);
}
declare class ChatRoom extends Server {
    private static _instance;
    private constructor();
    static getInstance(): ChatRoom;
}
declare var user1: User;
declare var user2: User;
declare var broker1: ChatRoom;
declare var broker2: ChatRoom;
declare var broker3: ChatRoom;
