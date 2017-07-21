 
  const prev=Symbol("prev1");
  const curr=Symbol("curr1");

  class fibo
    {
      constructor(previous,current){
        this[prev]=previous;
        this[curr]=current;
    }

     [Symbol.iterator]() { 
           let PrevNo = this[prev]; 
           let CurrentNo = this[curr] ;
           return { 
               next() { [PrevNo, CurrentNo] = [CurrentNo, PrevNo + CurrentNo]; 
                   return {done: false, value: CurrentNo}; 
                } 
            }


    }
}

export function fib(){

  let obj= new fibo(0,1);
  let itr = obj[Symbol.iterator](); 
  
  console.log("Fibonacci no ", itr.next());
  console.log("Fibonacci no ", itr.next());
  console.log("Fibonacci no ", itr.next());

}



 
    

 
      
    
    
 