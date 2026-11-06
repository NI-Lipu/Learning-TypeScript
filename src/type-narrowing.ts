//* Type of
let x=44;
// console.log(typeof(x));

//* Type Guard
const print=(value: string|number)=>{
    if(typeof(value)=== "string")return value.length;
}
console.log(print(x));
