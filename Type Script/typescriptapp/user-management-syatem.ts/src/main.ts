import { UserManager} from './usermanager';
import {user} from './User';
const Usermanager = new UserManager();
const User : user = {
    name: "Charani",
    email: "charani@gmail.com",
    dob: new Date (23-5-2003),
    address: "Bangalore",
    beveragepreference: "tea, coffee",
    gender: "female",
    meal: "nonveg",
    payment: "Cash",
    slider: 50,
};

Usermanager.adduser(User);
let users : user[] = Usermanager.listusers();
console.log(users);  
const User2 : user = {
    name: "Dharani",
    email: "dharani@gmail.com",
    dob: new Date(13-12-2004),
    address: "Hyderabad",
    beveragepreference: "tea",
    gender: "female",
    meal: "nonveg",
    payment: "Cash",
    slider: 40,
};

Usermanager.adduser(User2);
console.clear();
users = Usermanager.listusers();
console.log(users);

Usermanager.removeuser("Dharani");
users = Usermanager.listusers();
console.log(User);

Usermanager.searchUser("Charani");
