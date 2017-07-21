

 

export function generator(){

  let obj= new mygenerator();
   
  console.log("before generator");
  console.log("Armstrong no ", obj.next().value);
  console.log("After first");
  console.log("Armstrong no ", obj.next().value);
  console.log("Armstrong no ", obj.next().value);
  console.log("Armstrong no ", obj.next().value);
  

}

function* mygenerator(){
   let number =1;

          while(number!=0){
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
                     yield temp1;
                }
                 number++; 
                   } 
}

 
    

 
      
    
    
 