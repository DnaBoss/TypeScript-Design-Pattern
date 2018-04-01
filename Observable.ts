/*
觀察者模式講解:
首先定義觀察介面，和監聽介面
實作觀察者和監聽者

舉例:看盤軟體發佈給所有登入軟體的人 每支股票的訊息
使用者通常可以自定義，自己只想收到那些股票的訊息
當然也可以全都收看

拿到股票訊億後，使用者想買股票、想賣股票，
或是去吃高級料理還是去賽馬
那是使用者他家的事，

看盤軟體是一個Observable
看盤的人是Subscriber

=====================================

使用時機:
觀察者模式的使用時機很多
但我個人認為，有一種情況會讓我非常想用，
甚至是讓我覺得非用不可。

當資訊量非常多、非常複雜，
必需依劇使用者此時此刻的狀態、環境、時間、
電腦效能等各種因素去決定該發送什麼訊息的時後

我就會極度傾向使用觀察者模式
而不要由後台去判斷使用者的狀態、環境、時間後
再由後台決定發送什麼訊息

因為使用者(這裡指的是Client，而非產品的使用者)
才是最清楚知道自己需要什麼訊息，
由後台去為使用者判斷，只會徒增後台的複雜度
*/


//we will use a push observer pattern 

//觀察介面
interface IObservable {
    subscribe: Function;
    unsubscribe: Function;
    publish: Function;
}

//監聽介面
interface ISubscriber {
    receive: Function;
}

//使用者實作 監聽介面
class User implements ISubscriber {
    userID: number;
    constructor(userID: number) {
        this.userID = userID;
    }
    receive(data: any) {
        console.log(this.userID + '號 user 收到訊息:' + data);
    }
}

//伺服器實作觀察介面
class Server implements IObservable {
    private subscribers: Map<string, Set<ISubscriber>> = new Map();

    constructor() {
        this.subscribers!.set('test', new Set());
    }

    public subscribe(user: User, channel: string) {
        //頻道若不存在則建立頻道，當然也可以反過來，只讓使用者註冊已經存在的頻道
        this.existChannel(channel) ? this.creatChannel(channel) : null;
        this.existUser(user, channel) ?
            //請自行實作失敗處理 
            console.log("訂閱失敗") :
            this.subscribers.get(channel).add(user);
    }

    public unsubscribe(user: User, channel: string) {
        this.existChannel(channel) && this.existUser(user, channel) ?
            this.remove(user, channel) :
            //請自行實作失敗處理
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

//聊天室繼承伺服器 - 對，所以它叫 「聊天伺服器」
class ChatRoom extends Server {
    private static _instance: ChatRoom;
    private constructor() {
        super()
    }
    static getInstance() {
        return this._instance = this._instance || new ChatRoom();
    }
}

var user1 = new User(1);
var user2 = new User(2);
//我在程式的某處 建立了一個聊天室廣播器 1號
var broker1 = ChatRoom.getInstance();
//我在程式的某處 建立了一個聊天室廣播器 2號
var broker2 = ChatRoom.getInstance();
//我在程式的某處 建立了一個聊天室廣播器 3號
var broker3 = ChatRoom.getInstance();

//==================================
//不論是跟一號廣播器註冊，或二號廣播器註冊，都可以收到三號廣播器的所發送的訊息
broker1.subscribe(user1, 'test');
broker2.subscribe(user2, 'test');
broker3.publish('系金A', 'test');

//三號廣播器也可以移除對二號廣播器註冊的使用者二號
broker3.unsubscribe(user2, 'test');
broker3.publish('系金A', 'test');
/*
問題1: 為什麼聊天室要寫成單例?
回答1: 因為方便我寫髒CODE，
原則上，註冊頻道應該都在同一個頁面、發送訊息也該在同一個頁面或區塊
但現實就是，我總有沒時間做設計 或想快速做出一個DEMO的時後
我希望不管那裡都能使用這個聊天至 

問題2:我用socket的on及emit方法不就能做一樣的事了嗎
為什麼還要用觀察者?(可能還得讓User攜帶一個emit及on之類的方法)

回答2: 沒錯 
socket.on('channelName',cb) 跟
socket.emit('channelName', data);
就夠作聊天室了，但對套件二次封裝，能更妥善的管理及使用套件
不同意也沒關系，但我還滿信二次封裝這套的
我沒看過那個高手大神不幹這件事的 
而且觀察者也不只是拿來做聊天室
*/





