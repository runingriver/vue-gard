//字符参数
function sayHelo(name = "Curry"){
    console.log(`Helo ${name}`);
}
sayHelo();
sayHelo("Koma");

//数值计算
function add(a=1, b=a){
    return a+b;
}
console.log(add());
console.log(add(10));
console.log(add(10, 20));

//必须指定参数
function required(){
    throw new Error("参数未制定");
}
//默认参数是方法，执行默认方法，用于指定必须传参
function sayBye(name=required()){
    console.log(`${name} bye!`);
}
sayBye('Koma');
// sayBye();

console.log('----------------');
function sum(...args) {
    let result = 0;
    args.forEach(val => {
        result += val;
    });
    return result;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9,10));

console.log('----------------');
let list = [10, 20, 30];

//ES5
let newlist = list.map(function(value, index){
    return value * value;
});
console.log(newlist);

//ES6
newlist = list.map((value, index) => {
    return value * value;
});
console.log(newlist);

newlist = list.map(value => {
    return value * value;
});
console.log(newlist);