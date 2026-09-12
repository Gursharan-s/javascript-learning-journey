// console.log("hello");
// console.error("error");
// console.warn("Ooooo");
// console.info("oa choto");
// console.table({ name : "choto don" , case : "badmosa"});

// let no = 35 * 2 - (10 / 2) + 7 ;
// console.log(no);

// console.log(typeof"123");
// console.log(typeof 123);
// console.log(typeof croco);
// console.log(typeof null);

// let a = 34;
// let b = 67;
// let c ;

// c = a;
// a = b;
// b = c;
// console.log(a , b);

// console.groupCollapsed("start");
// console.log(typeof croco);
// console.log(typeof croco);
// console.log(typeof croco);
// console.log(typeof croco);
// console.groupEnd();

// const croco = { name : "don" , case : 320 , aim : "badmosa" };
// console.log("before change" , croco);

// croco.case = 420;
// croco.aim = "billo don";

// console.log("after change" , croco);

// let str = "50";

// console.log(+str);
// console.log(parseInt (str));
// console.log(Number (str));

// let str = "javaScript";

// if (str.indexOf("Script") === -1 ) {
//     console.log("false");

// }
// else{
//     console.log("true");

// }

// let arr = [ 11, 22, 33 ,44 ,55];

// let no = arr.reduce((axx, coo) => {
// return axx + coo;
// },0);

// console.log(no);
// Q11
// for (let i = 10; i>=0; i--) {
//     console.log(i);
// }
// Q12
// for (let num = 3; num <=30; num+=3) {
// console.log(num);

// }
// q13
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;

// }
// console.log(sum);
// let num = 0;
// let i = 1;
// while (i<=100) {
//     num+=i;
//     i++;

// } 
// console.log(num);
// for (let i = 0; i <= 4; i++) {
//     let star = "*";
//     for (let j = 1; j <= i; j++) {
//         star+="*";

//     }
//     console.log(star);

// }
// Q15
// let str = "Gursharan singh";

// for (let char of str ) {

//     console.log(char);

// }
// Q16
// let arr = [1,2,1,1,2,3,4,5,6,4];

// let unique  = [...new Set(arr)];

// console.log(unique);
// Q17
// function secoundlargest (arr){

//    let sorted = [...new Set(arr)].sort ((a,b) => b-a );

//    return sorted.length>1 ? sorted[1] : null;

// }
// console.log(secoundlargest([10,24,14,14,20,89,20]));

// function thirdlargest(arr) {
//     let sorted = [...new Set(arr)].sort((a, b) => b - a);

//     return sorted.length > 2 ? sorted[2] : null;
// }
// console.log(thirdlargest([10, 20, 10, 40, 78, 20]));

// Q18
// let num = [10, 20, 60, 40 , 20 ,80 ]

// num.sort((a,b)=>b-a);

// console.log(num);

//Q19
// function reversearry(arr) {

//     let rev = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         rev.push(arr[i])
//     }
//     return rev;
// }
// console.log(reversearry([10, 20, 50, 70, 90]));
//q20
// function displayfunction (calll) {
//     setTimeout (calll , 3000);
// }
// function backkk () {
//     console.log("helloooo");

// }
// displayfunction(backkk);
//q21

// function workofmap(arrr, callback) {
//     let Ooooo = [];

//     for (let i = 0; i < arrr.length; i++) {

//         Ooooo.push(callback(arrr[i], i, arrr));

//     }
//     return Ooooo;
// }
// console.log(workofmap([10, 30, 40, 60], num => num * 2));
//q22
// function ccounter() {
//     let oaaa = 0;
//     return function () {
//         return oaaa++;
//     }

// }

// const counter = ccounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

//q23
// function limter(arr, limt) {
//     let la = 0;
//     return function () {
//         if (la < limt); {
//             limt++;
//             arr();
//         }
//     };
// }

// let arr = limter(() => console.log("Meowww"), 4);

// arr();
// arr();
// arr();

// Q24
// function repeat(arr, inter) {
//     setInterval(arr , inter * 1000)
// }

// repeat(() => console.log("meowwww"),3);

// q25
// function greeting (greet){
//     return function (name){
//         return `${greet} , ${name}`;
//     };
// }

// const message = greeting ("hellooo");
// console.log(message("jatt"));
// console.log(message("saini"));

// Q26
// function callback (fun){
//     let executed = false;
//     return function (args){
//         if(!executed ){
//             executed = true;
//             return fun (args);
//         }

//     };
// }

// const fun = callback (function (){
//     console.log("hellooooo bhen chooo");

// });

// fun();
// fun();
// fun();

// Q27 
function throtte(fun, delay) {
    let stop = 0;
    return function (args) {
        let now = Date.now();
        if (now - stop >= delay) {
            stop = now;
            return fun(args);
        }
    }
}

const yoo = throtte(function () {
    console.log("holyyy shit");

},2000);

yoo();
yoo();
yoo();