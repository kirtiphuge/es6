export function mapset(){

    let chatroom1 = new Map();
    let chatroom2 = new Map();

    let msg = new Set();
    msg.add('hii');
    msg.add('hello');

    chatroom1.set('kirti','hiiii..i m kirti');
    chatroom1.set('Anjali','hiii....i m anjali');
    chatroom1.set('Sneha',msg);
    

    chatroom2.set('Pooja','Hello');
    chatroom2.set('Shruti','Working at Xoriant');
    chatroom2.set('Pranjal','Nice');

    let arr = [...chatroom1.keys()];
    console.log("USERS in ChatRoom 1....") 
    console.log(arr);

    let arr1 = [...chatroom1.values()];
    console.log("msgs in ChatRoom 1....") 
    console.log(arr1);


    let key2 = [...chatroom2.keys()];
    console.log("USERS in ChatRoom 2....") 
    console.log(key2);

    let value2 = [...chatroom2.values()];
    console.log("msgs in ChatRoom 2....") 
    console.log(value2);
}