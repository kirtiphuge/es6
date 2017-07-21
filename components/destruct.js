export function dest(){
  var [,,c,,]=[1,2,3,4,5];
  console.log("c",c);

  let org={
  name :'kittu',
  add :{
      city:'pune',
      pincode:411039,
  }};
  let {add: {city, pincode}} = org; 
  console.log("City",city,"pincode",pincode);
}


