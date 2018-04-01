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

let j = {
    a: 1
};

let changeable = watch(j, (obj, property, value) => {
   
});

changeable.a = 1;

changeable.a = 2;


