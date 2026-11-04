//** Literal Type
type Status="pending"
const status:Status= 'pending'

//** Basic Union
type Identity = string | number;
const id:Identity=3;
const name:Identity="Lipu"

//** Literal Union 
type Role = 'user' |'admin';
const userRole:Role = 'user';

//** Object Union
type Admin={id:number, role:'admin', privileges:string[]}
type Member={id:number, role:'member', plan:string []}

type User = Admin | Member;
const user:User={id:1, role:'member', plan:['a','b']}