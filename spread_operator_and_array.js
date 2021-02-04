const list1=[12,14,19,23];
const list2=[19,65,16,'Bangladesh'];
const allInOne=list1.concat(list2);
//console.log(allInOne);

const allInOne2=[...list1,...list2];
console.log(allInOne2);


const maxNumber=Math.max(...list1);
console.log(maxNumber);
