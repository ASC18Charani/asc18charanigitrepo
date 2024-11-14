import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  // standalone: true,
  // imports: [],
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  // updateForm!: FormGroup; 
  id: number = 0;
  user: User = new User();
  constructor(private userService: UserService,
    private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.user = new User();
      this.userService.getUserById(this.id).subscribe(searchedUser => { this.user = searchedUser; }, error => console.log(error));
    }

    updateUser(): void {
      this.userService.updateUser(this.id, this.user).subscribe(updatedUser => { console.log(updatedUser) }, error => console.log(error));
      this.router.navigate(['/users']);
    }
}
