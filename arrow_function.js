//Way 1
const multiply=function(num){
    return num*5;
}
console.log(multiply(10));

//Way 2
const multiply2=function anyName(num){
    return num*5;
}
console.log(multiply2(20));


//ES6 Way 1
//multiply3=parameter=>ja return korbe
const multiply3=num=>num*5;
console.log(multiply3(25));

//ES6 more than 1 Parameter
const multiply4=(num,num2)=>num*num2;
console.log(multiply4(2,5));

//ES6 more than 1 Parameter and Big Function
const multiply5=(num,num2)=>{
    if(num>5){
        return "Number One is Big";
    }else{
        const multi=num*num2;
        return `The return is ${multi}`;
    }
}
console.log(multiply5(4,5));