
// taking user input and print it and its length............

/*
let text;
let name=prompt('Enter your name');
if(name==null || name==""){
    text='user cancelled the prompt'
}
else{
    text="hello "+name+" how are you"
}
document.write(text + '<br/>') 
document.write("Your name contain: " +name.length+ " character")
*/

// task-1

/*
let firstName=prompt('first name');
let lastName=prompt('last name');

let fullName=firstName+" "+lastName;
document.write(fullName +"<br/>")
document.write(fullName.length +"<br/>")
document.write(fullName.toUpperCase())
*/

// let x=4;
// let y=Math.pow(x,2);
// console.log(y);
// date=new Date();
// console.log(date);


//check input is consonant or vowel.................
/*
var input=prompt('enter a digit')
input=input.toLowerCase();

switch(input){
    case "":
        document.write('user cancelled the request')
        break
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      document.write('vowel');
      break

      default:
      document.write('consonant');
}
*/

//for loop..........
// let sum=0;
// for(var i=1; i<=5; i++){
//     sum=sum+i;
// }
// console.log(sum);

//write a function that will print the sum of 1 to 100 number which are only divided by 3 and 5
// let sum=0;
// for(var i=1; i<=100; i++){
//     if(i%3==0 && i%5==0){
//         sum=sum+i;
//     }
// }
// console.log(sum);

// let sum=0;
// for(var i=1; i<=100; i++){
//     if(i%3==0 && i%5==0){
//         console.log(i);
//     }
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text= text + cars[i] + "<br>";
// }
// document.write(text)


//find the biggest number from 3 numbers.............using ternary operator
// var x=10;
// var y=20;
// var z=7;

// const result=x>y && x>z ? "x is bigger than others": y>x && y>z ? "y is bigger than others" :"z is bigger than others"
// console.log(result);


//IIFEs Immediate Invokeable function expression..................
// (function add(x,y){
//     const result=x+y;
//     console.log(result);
// })(2,2)



//game with random number.........................................
// var won=0;
// var lost=0

// for (var x = 1; x <= 5; x++) {
//     let input = parseInt(prompt('enter any number between 1 to 5'));
//     let output = Math.floor(Math.random() * 5) + 1;

//     if (input == output) {
//         console.log('You have won, matching digit is = ' + input)
//         won=won+1
//     }
//     else {
//         console.log('You have lost')
//         lost=lost+1
//     }
// }
// document.write('You have won, random number is ='+ won +"<br/>")
// document.write('You have lost, random number is ='+ lost)


// var date=new Date()
// var day=date.getDay();
// var month=date.getMonth();
// var year=date.getFullYear();
// var hours=date.getHours();
// var minutes=date.getMinutes();
// console.log(day, month, year, hours, minutes);

// img=["img/hotel-1.jpeg", "img/hotel-2.jpeg", "img/hotel-3.jpeg", "img/hotel-2.jpeg",];
// let sliderImg=document.getElementById('sliderImg');
// var imgIndex=0;
// setInterval(()=>{
//     if(imgIndex===img.length){
//         imgIndex=0;
//     }
//     const sliderIndex=img[imgIndex]
//     sliderImg.setAttribute("src", sliderIndex);
//     imgIndex++;
// },3000)


img=["img/hotel-2.jpeg", "img/hotel-3.jpeg", "img/hotel-2.jpeg", '/img/hotel-1.jpeg'];

let sliderImg=document.getElementById('sliderImg')
var click=0
const handleNextClick=()=>{
    if(click===img.length){
        click=0;
    }
    const imgIndex=img[click];
    sliderImg.setAttribute('src', imgIndex)

    click++;
}
const handlePreClick=()=>{
    if(click==-1){
        click=3;
    }
    const imgIndex=img[click];
    sliderImg.setAttribute('src', imgIndex)
    click--;
}
