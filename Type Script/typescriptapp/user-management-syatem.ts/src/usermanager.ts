import {user} from "./User";
export class UserManager {
private users : user[] = [];

adduser(user : user):void {
    this.users.push(user);
}

listusers():user[] {
    return this.users;
};


removeuser(name:string):void {
    this.users = this.users.filter(user => user.name !== name);
    console.log(`user with id ${name} removed successfully`);
}

searchUser(name:string):void{
    this.users=this.users.filter(user=>user.name == name);
    console.log(this.users);
}

}