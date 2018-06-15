/**
 * 基本对象定义
 */
let title = "ES6从入门到学会";
let price = 25;
let publish = "小马出版社";

let book = {
    title, price, publish,
    toString(){
        console.log(`<<${this.title}>> is ${price}元。`);
    }
};
book['lang'] = "简体中文";

console.log(book);
book.toString();

console.log('----------------');
/**
 * 类定义
 */
class Player {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    show(){
        console.log(`${this.name}的性别是${this.sex}。`);
    }
    static info(){
        console.log("这是一个球员类，您可以使用它建立自己的球员。");
    }
}

let player = new Player("库里", "男");
console.log(player.name, player.sex);
player.show();

Player.info();

console.log('----------------');
/**
 * 类getter，setter
 */
class Player2 {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    get age(){
        return this._age;
    }
    set age(val){
        this._age = val;
    }
}

let player2 = new Player2("库里", "男");
player2.age = 28;
console.log(player2);
console.log(player2.age);

console.log('----------------');
/**
 * 类继承
 */
class Car {
    constructor(brand){
        this.brand = brand;
    }
    show(){
        console.log(`本台车的品牌是${this.brand}`);
    }
}

class Lexus extends Car {
    constructor(brand, lineup) {
        super(brand);
        this.lineup = lineup;
    }
    getPrice(){
        switch(this.lineup){
            case "RX":
                return 60;
            case "NX":
                return 40;
            default:
                throw new Error("未知车类别");
        }
    }
}

let mycar = new Lexus("Lexus", "RX");
mycar.show();
console.log("价格是：", mycar.getPrice(), "万");