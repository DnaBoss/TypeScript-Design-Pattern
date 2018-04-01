//we will use a push observer pattern 
interface IObservable {
    subscribe: Function;
    unsubscribe: Function;
    publish: Function;
}

interface ISubscriber {
    receive: Function;
}

class User implements ISubscriber {
    userID: number;
    constructor(userID: number) {
        this.userID = userID;
    }
    receive(data: any) {
        console.log(this.userID + '號 user 收到訊息:' + data);
    }
}

class Observable implements IObservable {
    private subscribers: Map<string, Set<ISubscriber>> = new Map();

    constructor() {
        this.subscribers.set('test', new Set());
    }

    public subscribe(user: User, channel: string) {
        this.existChannel(channel) ? this.creatChannel() : null;
         && !this.existUser(user, channel) ?
            this.subscribers.get(channel).add(user) :
            console.log("訂閱失敗");
    }

    public unsubscribe(user: User, channel: string) {
        this.existChannel(channel) && this.existUser(user, channel) ?
            this.remove(user, channel) :
            console.log("退訂失敗");
    }

    public publish(data: string, channel: string) {
        this.subscribers.get(channel).forEach((user: User) => user.receive(data));
    }

    private existChannel(channel: string) {
        return this.subscribers.has(channel);
    }

    private creatChannel(channel: string) {
        this.subscribers.set(channel, new Set());
    }

    private existUser(user: User, channel: string) {
        return this.subscribers.get(channel).has(user);
    }

    private remove(user: User, channel: string) {
        this.subscribers.get(channel).delete(user);
    }

}

class Borker extends Observable {
    private static _instance: Borker;
    private constructor() {
        super()
    }
    static getInstance() {
        return this._instance = this._instance || new Borker();
    }
}

var user1 = new User(1);
var user2 = new User(2);
var broker1 = Borker.getInstance();
var broker2 = Borker.getInstance();
var broker3 = Borker.getInstance();
broker1.subscribe(user1, 'test');
broker2.subscribe(user2, 'test');
broker3.publish('系金A', 'test');
console.log('removie user 2 and publish')
broker3.unsubscribe(user2, 'test');
broker3.publish('系金A', 'test');