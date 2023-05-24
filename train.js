//task E

function isPrime(number) {

    if (number < 2 || !Number.isInteger(number)) {
        return "Not a prime";
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(41));




//task D
// const moment = require('moment');
// class Shop {

//     constructor(nonSoni, kolaSoni, shurvaSoni) {
//         this.dukon = {
//             non: nonSoni, kola: kolaSoni, shurva: shurvaSoni
//         };
//     }

//     qoldiq() {
//         console.log(this.dukon);
//         console.log(moment().format("hh:mm:ss"));
//     }

//     sotish(mahsulot, miqdor) {
//         if (this.dukon[mahsulot] < miqdor) {
//             console.log("Uzr, bizda mahsulot yetarli emas");
//             this.qoldiq();
//             console.log(moment().format("hh:mm:ss"));

//         } else {
//             this.dukon[mahsulot] -= miqdor;
//             console.log(`${mahsulot} ${miqdor} ta sotildi. Rahmat`);
//             this.qoldiq();
//             console.log(moment().format("hh:mm:ss"));

//         }
//     }

//     qushish(mahsulot, miqdor) {
//         this.dukon[mahsulot] += miqdor;
//         console.log(`Omborga ${mahsulot} ${miqdor} ta qushildi`);
//         this.qoldiq();
//         console.log(moment().format("hh:mm:ss"));

//     }
// }


// let shop = new Shop(10, 10, 10);
// shop.qoldiq();
// shop.sotish("non", 4);
// shop.qushish("kola", 2);


// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba buling",
//     "tugri boshliq tanlang va koproq xato qiling",
//     "uzingiz uchun ishlashni boshlang",
//     "Siz kuchli bulgan narsalarni qiling",
//     "yoshlarga investitsiya qiling",
//     "Endi dam oling 😂"
// ];

//Callback functions

// async function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("Insert a number", null)
//     else if (a > 60) callback(null, list[5])
//     else if (a > 50) callback(null, list[4])
//     else if (a > 40) callback(null, list[3])
//     else if (a > 30) callback(null, list[2])
//     else if (a > 20) callback(null, list[1])
//     else {
//         setTimeout(function () {
//             callback(null, list[5])
//         }, 5000);
//     }
// }

// console.log("passed 0 - zero");

// maslahatBering(80, (err, data) => {
//     if (err) console.log("Error", err)
//     else {
//         console.log(("Javob", data));
// }
// })


// Async functions
// async function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("Insert a number", null)
//     else if (a > 60) return list[0]
//     else if (a > 50) return list[1]
//     else if (a > 40) return list[2]
//     else if (a > 30) return list[3]
//     else if (a > 20) return list[4]
//     else {
//       return list[5]
//     }
// }

// promise 

// async function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("Insert a number", null)
//     else if (a > 60) callback(null, list[5])
//     else if (a > 50) callback(null, list[4])
//     else if (a > 40) callback(null, list[3])
//     else if (a > 30) callback(null, list[2])
//     else if (a > 20) callback(null, list[1])
//     else {
//       return new Promise((resolve, reject) => {
//         setInterval(function () {
//             callback(null,list[0])
//         },1000)
//       })
//     }
// }

// maslahatBering(18, (err,data)=>{
//     if (err) {
//         console.log("Error:",err);
//     }else{
//         console.log("javob:", data);
//     }
// })


//then&catch
// maslahatBering(25)
// .then((data)=>{
//     console.log("Javob:", data);
// })
// .catch(err => {
//     console.log("Error:", err);
// })
// console.log("passed here 1 - one");


// async/await
// async function run (){
//     let javob  = await maslahatBering(25);
//     console.log(javob);
//      javob  = await maslahatBering(35);
//     console.log(javob);
//      javob  = await maslahatBering(45);
//     console.log(javob);
// }
// run();


// //Chellenj 3
// let alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
// let code = 4;
// alphabet = alphabet.split("");
// code = code % 26; // o'ta katta raqam kiritilganda kerak buladi. misol uchun 55

// function decodeMessage(message, code) {
//     message = message.split("");
//     let codedMessage = [];

//     for (let i = 0; i < message.length; i++) {
//         let letter = message[i];
//         if (alphabet.includes(letter)) {
//             const indexInAlphabet = alphabet.indexOf(letter);
//             const newIndex = indexInAlphabet + code;
//             if (newIndex < 0) {
//                 let newNewIndex = 26 + newIndex;
//                 codedMessage.push(alphabet[newNewIndex])
//             } else {
//                 codedMessage.push(alphabet[newIndex])
//             }
//         } else {
//             codedMessage.push(letter)
//         }
//     }
//     codedMessage = codedMessage.join("")

//     return codedMessage
// }
// let message = "Yes Hello, how are you doing my General?";
// message = message.toLowerCase();
// const secretMessage = decodeMessage(message, code);

// console.log("Secret:", secretMessage);



// setTimeout(() => {

//     const messageEncoded = decodeMessage(secretMessage, -code);
//     console.log("Original:", messageEncoded);
// }, 2000)