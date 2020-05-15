class Animal {
  constructor(name){
    this.name = name;
    this.type = "animal";
  }

  getName(){
    return this.name;
  }
}

let animal = new Animal("lion");
console.log(animal.getName())
console.log(typeof Animal)
console.log(animal.type)

console.log(`a
b
c`)

let arr = [0,1,2];
let [a=1, b, c=3, d=4] = arr;
console.log(a,b,c,d)

console.log([..."abcde"])

function test(a, b, ...arr){
  console.log(arr);
}

test(1,2,3,4,5)