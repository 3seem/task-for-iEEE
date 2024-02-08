let txt="hello world";
console.log(txt.length)
let d="-100";
let e= "20";
let f=30;
let g=true;
console.log(-d*+e);
// -d return the value in d after converting it from string with negative sign so it will return 100
// * it refers to multiply
// +e  return value in e after converting it from string so it will be 20 
// so result will be 100*20 equal 2000
console.log(- -100 *20);
//first executed -100*20 will be -2000
//then -(-2000)  will be 2000
console.log(-d + ++e * ++g + ++f);
//first executed ++e * ++g increement to e and g and after that multiply them by each other e=21 and g=2  
//then after this step ++e * ++g will be 21*2 = 42
// after that -d + 42    -d return the value in d after converting it from string with negative sign so it will return 100
//so -d + 42 will be 142
// last one 142 + ++f  increement to f first so f will be 31 then adding it to 142 so result will be 173
console.log( f%8 + 2);//9
console.log(f%8 + 3);//10

let x=6.7849;
console.log((x).toFixed(2));
//max and min num
console.log(Math.max(10,20,-90,30,99));
console.log(Math.min(10,20,-90,30,99));

let word = "activity";
let letterC = "c";
let letterZ = "z";
let letterY = "y";
console.log(word.includes(letterC));
console.log(word.includes(letterZ));
console.log(word.includes(letterY));