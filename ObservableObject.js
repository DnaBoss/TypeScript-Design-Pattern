function watch(object, onChange) {
        const handler = {
            set(target, key, value, receiver) {
                if (target[key] !== value) {
                    onChange(target, key, value);
                }
                return Reflect.set(target, key, value, receiver);
            },
            deleteProperty(target, property) {
                onChange(property);
                return Reflect.deleteProperty(target, property);
            }
        };

        return new Proxy(object, handler);
    };

    let test = {
        gg: 1
    };

    let changeable = watch(test, (obj, property, value) => {
        console.log(`test 的 ${property} 由 ${test[property]} 改變為 ${value}`)
    });

    //再設定一樣的值，但不會觸發通知
    changeable.gg = 1;
    //這次改成不一樣的值，就會觸發通知道
    changeable.gg = 2;
    //再設定一樣的值，但不會觸發通知
    changeable.gg = 2;
    //這次改成不一樣的值，就會觸發通知道
    changeable.gg = 3;
    //新增一個屬性也會收到通知
    changeable.b = 5;
