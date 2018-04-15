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

    return new (object, handler);
};

let test = {
    gg: 1
};

let changeable = watch(test, (obj, property, value) => {
    console.log(`test 的 ${property} 將由 ${test[property]} 改為 ${value}`);
});

changeable.gg = 1;
changeable.gg = 2;
changeable.gg = 2;
changeable.gg = 3;


