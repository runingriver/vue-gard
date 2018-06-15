console.log('hello world');

function test1(a, b) {
    let c = 10;
    return a + b + c;
}

let result = test1(10, 20);

console.log('result:', result);
console.log('----------------');

function test_swith(count) {
    switch (count) {
        case 1:
            console.log('switch 1');
            break;
        case 2:
            console.log('switch 2');
            break;
        case 3:
            console.log('switch 3');
            break;
        case 4:
            console.log('switch 4');
        default:
            console.log('default');
    }
}

test_swith(2);
console.log('----------------');

const data = 10;
console.log(data);
//data = 100; //执行错误

const list = [10,20,30];
console.log(list);

list[0] = 100;
console.log(list);

//list = [1,2,3]; //错误
console.log('----------------');

console.log('2进制：0b10', 0b10); //2
console.log('8进制：0o10', 0o10); //8
console.log('16进制：0x10', 0x10); //16

console.log('ob11==3:',0b11 === 3); //true
console.log('0o10 === 8:', 0o10 === 8); //true
console.log('0x10 === 16', 0x10 === 16);//true

let num = 10;
console.log('num.toString(8):', num.toString(8)); //8进制转换
console.log('num.toString(2):', num.toString(2)); //2进制转换
console.log('num.toString(16):', num.toString(16));//16进制转换
console.log('num.toString(5):', num.toString(5)); //5进制？嘿嘿
console.log('----------------');

let name = "Koma";
let mystr1 = "你好，${name}!";
let mystr2 = `你好，${name}！再见。`;

console.log(mystr1);
console.log(mystr2);

function tagged(formats, ...args){
    console.log(formats);
    console.log(args)
}

tagged`你好，${name}！再见。`;
console.log('----------------');

let address = "网吧";
let fmtstr = markdown`你好，${name}！
晚上一起去${address}玩吗？
等你的回信。`;
console.log(fmtstr);

function markdown(formats, ...args){
    console.log(formats);
    console.log(args);
    var result = "# 信息标题\n";
    for(var i = 0; i < formats.length; i++)
        result += formats[i] + "**" + (args[i] || '') + "**";
    return result;
}