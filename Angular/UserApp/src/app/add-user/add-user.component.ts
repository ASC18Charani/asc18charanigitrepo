import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { ActivatedRoute, Router} from '@angular/router';
import { UserService } from '../service/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  // standalone: true,
  // imports: [],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm!: FormGroup;
  id: number = 0;
  user: User = new User();
  constructor(private userService: UserService,
    private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.userService.getUserById(this.id).subscribe(searchedUser => { this.user = searchedUser; }, error => console.log(error));
    }

    createUser(): void {
      this.userService.createUser(this.user).subscribe(createUser => { console.log(createUser) }, error => console.log(error));
      this.router.navigate(['/users']);
    }

}


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { UserService } from '../service/user.service';

// @Component({
//   selector: 'app-add-user',
//   // standalone: true,
//   // imports: [ReactiveFormsModule],
//   templateUrl: './add-user.component.html',
//   styleUrl: './add-user.component.css'
// })
// export class AddUserComponent implements OnInit {

//   addForm: FormGroup;
//   constructor(private formBuilder: FormBuilder,
//     private userService: UserService) {
//     this.addForm = this.formBuilder.group({
     
//       id: [Validators.required],
//       name: [],
//       email: [],
//       password: [],
//       dob: [],
//       address: [],
//       beveragepreference: [],
//       gender: [],
//       meal: [],
//       payment: [],
//       slider: []
//     });
//   }



//   ngOnInit(): void {
//     this.addForm = this.formBuilder.group({
//       id: [],
//       name: [],
//       email: [],
//       password: [],
//       dob: [],
//       address: [],
//       beveragepreference: [],
//       gender: [],
//       meal: [],
//       payment: [],
//       slider: []
//       // salary:[]
//     });
//   }


//   saveUser() {
//     console.log('User details sent to server..');
//     if (this.addForm) {
//       console.log(this.addForm.value);
//       this.userService.createUser(this.addForm.value)
//         .subscribe((data) => {
//           console.log('data saved ', data)
//         })
//     } else {
//       console.error('Form is not initialized');
//     }

//   }
// }
