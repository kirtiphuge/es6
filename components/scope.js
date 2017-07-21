export function testScope(){
    if(10>5)
    {
        var x=100;
        let y=200;
    }
    console.log(x);
    console.log(y);
}