/**
 * 对象迭代
 */
let list  = [10, 20, 30];
let mystr = '你好啊';
let mymap = new Map();
mymap.set('JS', 'Javascript');
mymap.set('PL', 'Perl');
mymap.set('PY', 'Python');

for(let val of list){
    console.log(val);
}

for(let val of mystr){
    console.log(val);
}

for(let [key,value] of mymap){
    console.log(key, value);
}

let it = mymap.values();
let tmp;
while(tmp = it.next()){
    if (tmp.done) break;
    console.log(tmp.value, tmp.done);
}
console.log('----------------');
/**
 * 对象迭代
 */
class Player {
    constructor(list){
        this.list = list;
    }
    [Symbol.iterator](){
        let current = 0;
        let that = this;
        return {
            next(){
                return current < that.list.length ? {value:that.list[current++], done:false} : {done:true};
            }
        };
    }
}

let player = new Player(['Curry', 'Harden', 'LeBron']);
for(let tmp of player){
    console.log(tmp);
}



console.log('----------------');


class MyList {
    constructor(list){
        this.list = list;
        this[Symbol.iterator] = function*(){
            let current = 0;
            let that = this;
            while(current < that.list.length){
                yield that.list[current++];
            }
        }
    }
}

let mylist = new MyList([100, 200, 300, 400, 500]);
for(let val of mylist){
    console.log(val);
}
console.log('----------------');
/**
 * function* {} : 迭代生成器
 * yield : 迭代返回
 */
function* myGenerator() {
    yield '一';
    yield '条';
    yield '大';
    yield '河';
}

for(let val of myGenerator()){
    console.log(val);
}

function* countdown(begin){
    while(begin > 0){
        yield begin--;
    }
}

for(let tmp of countdown(5)){
    console.log(tmp);
}
