//math.mjs
function add(x, y){
    return x + y;
}

function minus(x, y){
    return x - y;
}

export { add, minus };


// main.mjs

import {add, minus} from './math';

console.log(add(10, 20));
console.log(minus(30, 20));


// ### 执行方法
// node --experimental-modules main.mjs


// Player.mjs

class Player {
    constructor(name){
        this.name = name;
    }
    sayHelo(){
        console.log(`Helo ${this.name}.`);
    }
}

export default Player;

//main.mjs
import Player from './Player';
let curry = new Player('Curry');
curry.sayHelo();
