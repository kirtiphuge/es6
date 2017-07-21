export function arrowFunc(){
    var names=['Kittu','Anjali','Sneha'];
    var newarray=[];

    names.map(name=>newarray.push({names:name,length:name.length}))
    

    console.log(newarray);
};