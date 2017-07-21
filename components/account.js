export function Acc(){
class Account{
    constructor(id,name,balance){
        this.id =id;
        this.name =name;
        this.balance =balance;
    }

    getBalance(){};
}

class SavingAcc extends Account{
     constructor(id,name,balance,interest)
     {
         super(id,name,balance);
         this.interest =interest;
        
     }

     getBalance(){
         return this.balance+this.interest;
     }
}


class CurrentAcc extends Account{
   constructor(id,name,balance,cash){
       super(id,name,balance);
       this.cash_credit =cash;
   }
   getBalance(){
       return this.balance+this.cash_credit;
   }
}

let obj1=new SavingAcc(201,'kirti',50000,5000);
let obj2=new CurrentAcc(202,'Anjali',30000,10000);
let obj3=new SavingAcc(203,'kirti',50000,5000);

console.log("ID",obj1.id);
console.log("NAME",obj1.name);
console.log("BALANCE",obj1.balance);
console.log("INTEREST",obj1.interest);

console.log("ID",obj2.id);
console.log("NAME",obj2.name);
console.log("BALANCE",obj2.balance);
console.log("INTEREST",obj2.cash_credit);

var arr=[obj1,obj2,obj3];

let total=0;
 total= arr.map(obj=>{ return obj.getBalance() }).reduce(function(sum1,sum2){ return sum1=sum1+sum2;},0);
console.log(total);

}