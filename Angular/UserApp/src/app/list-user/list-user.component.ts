import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  // standalone: true,
  // imports: [],
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  searchTerm: string = '';
  users: User[] = [];
  filterUsers : User[] = [];
  userService: UserService;

  constructor(userService: UserService, private router: Router) {
    this.userService=userService;
  }
  ngOnInit(): void {
    this.loadUser();
    this.userService.getUsers().subscribe((userData) => {
      this.users = userData
    });
  }

  // deleteUser(toDeleteUser: User): void {
  //   if (toDeleteUser.id !== undefined) {
  //     this.userService.deleteUser(toDeleteUser.id).subscribe({
  //       next: () => {
  //         this.users = this.users.filter(user => user.id !== toDeleteUser.id);
  //       },
  //       error: (err) => {
  //         console.error("Error deleting user:", err);
  //       }
  //     });
  //   }
  // }

  loadUser(): void { 
    this.userService.getUsers().subscribe((userData) => {
      this.users = userData;
      this.filterUsers = [...this.users];
    });
  }

  deleteUser(toDeleteUser: User): void {
    if (toDeleteUser.id !== undefined) {
      this.userService.deleteUser(toDeleteUser.id).subscribe((user) => {
          this.users = this.users.filter(user => user.id !== toDeleteUser.id);
          this.filterUsers = this.filterUsers.filter(user => user.id!== toDeleteUser.id);
        }) ;
    }
  }
  
  
  updateUser(userId?: number) : void {
    if(userId !== undefined) {
      this.router.navigate(['update',userId]);
    }
    else {
      console.log("User Id is undefined");
    }
  }

  filterUser(): void {
    if(this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      this.filterUsers = this.users.filter(user =>
      (this.users = this.users.filter(user =>
         (user.id && user.id.toString().includes(term)) ||
    (user.name && user.name.toLowerCase().includes(term))  ||
  (user.email && user.email.toLowerCase().includes(term)) )));
    }
    else { 
      // this.loadUser();
      this.filterUsers = [...this.users];
    }
  }
}
