class User {
    constructor(userID) {
        this.userID = userID;
    }
    receive(data) {
        console.log(this.userID + '號 user 收到訊息:' + data);
    }
}
class Observable {
    constructor() {
        this.subscribers = new Map();
        this.subscribers.set('test', new Set());
    }
    subscribe(user, channel) {
        this.existChannel(channel) && !this.existUser(user, channel) ?
            this.subscribers.get(channel).add(user) :
            console.log("訂閱失敗");
    }
    unsubscribe(user, channel) {
        this.existChannel(channel) && this.existUser(user, channel) ?
            this.remove(user, channel) :
            console.log("退訂失敗");
    }
    publish(data, channel) {
        this.subscribers.get(channel).forEach((user) => user.receive(data));
    }
    existChannel(channel) {
        return this.subscribers.has(channel);
    }
    existUser(user, channel) {
        return this.subscribers.get(channel).has(user);
    }
    remove(user, channel) {
        this.subscribers.get(channel).delete(user);
    }
}
class Borker extends Observable {
    constructor() {
        super();
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
console.log('removie user 2 and publish');
broker3.unsubscribe(user2, 'test');
broker3.publish('系金A', 'test');
//# sourceMappingURL=Observable.js.map