const person={name:'Mehjabin',age:26,education:'BSC in CSE',phone:01700776615,friends:['Nahid Naj Tulin','Tumpa','Rajibul Hasan']}
console.log(person);
const fullName=person.name;
const herAge=person.age;
console.log(fullName,herAge);

//another way SMART Way
const {name,age,phone}=person;
console.log(name,age,phone);


//Array destructure
const friends=['Al-amin','sohel','hannan','rakib'];
const [any,...anything2]=friends;
console.log(anything2);


const wifeName='Mehjabin Hasan Moni';
const takaPysha=250;
console.log(`${wifeName} eta amar bou ebong tar kace taka ache ${takaPysha+500}`);