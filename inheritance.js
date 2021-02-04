class Parent{
    constructor(){
        this.fathersName='Abul Hossain Alam';
        this.mothersName='Fatima Begum';
    }
}

class Child extends Parent{
    constructor(childName){
        super();
        this.childName=childName;
    }

    getFullName(){
        return this.childName +" Is a good Boy and his father is "+this.fathersName; 
    }
}

const child1=new Child('Jahan');
const child1WithFunction=new Child('Jahan');
console.log(child1);
console.log(child1WithFunction.getFullName());