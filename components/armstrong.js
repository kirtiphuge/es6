

  class Armstrong
    {
    
     [Symbol.iterator]() { 
           let number =153;
           return { 
               next() { 
                   while(true){
                var arm=0,d,temp;


                temp=number;
                while(temp>0)
                {
                    let a=temp%10;
                    temp=parseInt(temp/10); // convert float into Integer
                    arm=arm+a*a*a;
                }
                if(arm==number)
                {    let temp1=number;
                     number++;
                     return {done: false, value: temp1}; 
                }
                 number++; 
                   } 
            } 
              
            }


    }
}

export function fib1(){

  let obj= new Armstrong();
  let itr = obj[Symbol.iterator](); 
  
  console.log("Armstrong no ", itr.next());
  console.log("Armstrong no ", itr.next());
  console.log("Armstrong no ", itr.next());
  

}



 
    

 
      
    
    
 