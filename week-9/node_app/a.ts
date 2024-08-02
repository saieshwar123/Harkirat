function identity<T>(arg: T[]):T{
    return arg[0];
}

let val=identity<string>(["sai","esh",12]);

console.log(val);
val.t