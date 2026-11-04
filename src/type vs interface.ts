//** Type vs Interface

//? Interface is generally connected to object
//? type alias  is generally connected to literals, unions, tuples, primitives

type id=number; 
//! interface id=number;

type Role= 'admin' | 'user';
//! interface Role= 'admin' | 'user';

interface User{
    name:string;
    id:id;
    role: Role;
}
const user:User={
    name:"lipu",
    id:1,
    role:'admin'
}


//Interface

interface Animal{
    species:string;
}

interface Cat extends Animal{
    breed:string;
}

const cat:Cat={
    breed:"persian",
    species:'cat fat'
}