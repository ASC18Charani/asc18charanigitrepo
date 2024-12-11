// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// @Component({
//     selector: 'app-login',
//     // standalone: true,
//     // imports: [],
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.css']
//   })

// export class LoginComponent {
//   loginForm: FormGroup;
//   failedAttempts: number = 0;
//   lockoutTime: number | null = null;
//   errorMessage: string = '';
//   submitted: boolean = false;

//   constructor(private fb: FormBuilder, private router: Router) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
//     });
//   }

//   get f() {
//          return this.loginForm.controls; // This makes it easier to access form controls in the template
//     }

//   onLogin() {
//     if (this.lockoutTime && Date.now() < this.lockoutTime) {
//       this.errorMessage = 'Account is locked. Please try again later.';
//       return;
//     }

//     if (this.loginForm.valid) {
//       // Simulate API call
//       const { email, password } = this.loginForm.value;
//       if (email === 'admin@vls.com' && password === 'Password@123') {
//         localStorage.setItem('admin', 'true');
//         this.router.navigate(['/dashboard']);
//         console.log('Login successful');
//         this.failedAttempts = 0; // Reset failed attempts
//       } else {
//         this.failedAttempts++;
//         if (this.failedAttempts >= 3) {
//           this.lockoutTime = Date.now() + 30 * 60 * 1000; // 30 minutes lockout
//           this.errorMessage = 'Account locked for 30 minutes.';
//           // this.router.navigate(['/dashboard']);
//         } else {
//           this.errorMessage = 'Invalid credentials. Please try again.';
//         }
//       }
//     }
//   }
// }


// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { RegistrationService } from '../service/registration.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   failedAttempts: number = 0;
//   lockoutTime: number | null = null;
//   errorMessage: string = '';
//   submitted: boolean = false;

//   constructor(
//     private fb: FormBuilder,
//     private registrationService: RegistrationService,
//     private router: Router
//   ) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern(
//             '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
//           )
//         ]
//       ]
//     });
//   }

//   get f() {
//     return this.loginForm.controls;
//   }

//   onLogin(): void {
//     if (this.lockoutTime && Date.now() < this.lockoutTime) {
//       this.errorMessage = 'Account is locked. Please try again later.';
//       return;
//     }

//     if (this.loginForm.valid) {
//       const { email, password } = this.loginForm.value;

//       // Check credentials with backend
//       this.registrationService.validateCredentials(email, password).subscribe({
//         next: (isAuthenticated) => {
//           if (isAuthenticated) {
//             localStorage.setItem('user', email);
//             this.router.navigate(['/dashboard']);
//             console.log('Login successful');
//             this.failedAttempts = 0;
//           } else {
//             this.handleFailedLogin();
//           }
//         },
//         error: (err) => {
//           console.error('Error during login:', err);
//           this.errorMessage = 'An error occurred. Please try again later.';
//         }
//       });
//     } else {
//       this.errorMessage = 'Please fill in all required fields.';
//     }
//   }

//   handleFailedLogin(): void {
//     this.failedAttempts++;
//     if (this.failedAttempts >= 3) {
//       this.lockoutTime = Date.now() + 30 * 60 * 1000; // Lock for 30 minutes
//       this.errorMessage = 'Account locked for 30 minutes.';
//     } else {
//       this.errorMessage = `Invalid credentials. You have ${
//         3 - this.failedAttempts
//       } attempt(s) left.`;
//     }
//   }
// }


// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   errorMessage: string = '';
//   private apiUrl = 'http://localhost:3000/registrations';

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
//         ]
//       ]
//     });
//   }


//   get f() {
//      return this.loginForm.controls;
//       }


//   onLogin() {
//     if (this.loginForm.valid) {
//       const { email, password } = this.loginForm.value;

//       // Check credentials against the backend
//       this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).subscribe({
//         next: (registrations) => {
//           if (registrations.length > 0) {
//             localStorage.setItem('user', JSON.stringify(registrations[0])); // Save user details in localStorage
//             this.router.navigate(['/dashboard']); // Navigate to dashboard
//           } else {
//             this.errorMessage = 'Invalid email or password.';
//           }
//         },
//         error: (err) => {
//           console.error('Error during login:', err);
//           this.errorMessage = 'Unable to log in. Please try again later.';
//         }
//       });
//     } else {
//       this.errorMessage = 'Please fill in all required fields.';
//     }
//   }
// }



// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   errorMessage: string = '';
//   private apiUrl = 'http://localhost:3000/registrations';

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]]
//     });
//   }

//   get f() {
//        return this.loginForm.controls;
//      }

// //   onLogin() {
// //     if (this.loginForm.valid) {
// //       const { email, password } = this.loginForm.value;

// //       // Fetch registered registrations and validate credentials
// //       this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).subscribe({
// //         next: (registrations) => {
// //           if (registrations.length > 0) {
// //             // Successful login
// //             localStorage.setItem('user', JSON.stringify(registrations[0])); // Save user details in local storage
// //             this.router.navigate(['/dashboard']); // Navigate to the dashboard
// //           } else {
// //             // Invalid credentials
// //             this.errorMessage = 'Invalid email or password.';
// //           }
// //         },
// //         error: (err) => {
// //           console.error('Error during login:', err);
// //           this.errorMessage = 'Unable to log in. Please try again later.';
// //         }
// //       });
// //     } else {
// //       this.errorMessage = 'Please fill in all required fields.';
// //     }
// //   }
// // }


// onLogin() {
//   if (this.loginForm.valid) {
//     const { email, password } = this.loginForm.value;
//     console.log('Login attempt with:', email, password); // Debug log

//     this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).subscribe({
//       next: (registrations) => {
//         console.log('API response:', registrations); // Debug log
//         if (registrations.length > 0) {
//           localStorage.setItem('user', JSON.stringify(registrations[0])); // Save user details in local storage
//           this.router.navigate(['/dashboard']); // Navigate to the dashboard
//         } else {
//           this.errorMessage = 'Invalid email or password.';
//         }
//       },
//       error: (err) => {
//         console.error('Error during login:', err);
//         this.errorMessage = 'Unable to log in. Please try again later.';
//       }
//     });
//   } else {
//     this.errorMessage = 'Please fill in all required fields.';
//   }
// }
// }


// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   errorMessage: string = '';
//   private apiUrl = 'http://localhost:3000/registrations';  // Your backend URL

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]]
//     });
//   }

//   get f() {
//     return this.loginForm.controls; // Makes it easier to access form controls in the template
//   }

//   onLogin() {
//     if (this.loginForm.valid) {
//       const { email, password } = this.loginForm.value;
//       console.log('Login attempt with:', email, password); // Debug log

//       // Fetch registered registrations and validate credentials
//       this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).subscribe({
//         next: (registrations) => {
//           console.log('API response:', registrations); // Debug log
//           if (registrations.length > 0) {
//             // Successful login
//             localStorage.setItem('user', JSON.stringify(registrations[0]));  // Save user details in local storage
//             this.router.navigate(['/dashboard']);  // Navigate to the dashboard
//             console.log('Login successful');
//           } else {
//             // Invalid credentials
//             this.errorMessage = 'Invalid email or password.';
//           }
//         },
//         error: (err) => {
//           console.error('Error during login:', err);
//           this.errorMessage = 'Unable to log in. Please try again later.';
//         }
//       });
//     } else {
//       this.errorMessage = 'Please fill in all required fields.';
//     }
//   }
// }




// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   errorMessage: string = '';
//   private apiUrl = 'http://localhost:3000/registrations';  // Your backend URL

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]]
//     });
//   }

//   get f() {
//     return this.loginForm.controls;  // Access form controls
//   }

//   onLogin() {
//     if (this.loginForm.valid) {
//       const { email, password } = this.loginForm.value;

//       // Fetch registered registrations and validate credentials
//       this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).subscribe({
//         next: (registrations) => {
//           if (registrations.length > 0) {
//             this.router.navigate(['/dashboard']);
//             // Successful login
//             localStorage.setItem('user', JSON.stringify(registrations[0]));  // Store user details in local storage
//             // this.router.navigate(['/dashboard']);  // Navigate to the dashboard
//             console.log('Login successful');
            
//           } else {
//             // Invalid credentials
//             this.errorMessage = 'Invalid email or password.';
//           }
//         },
//         error: (err) => {
//           console.error('Error during login:', err);
//           this.errorMessage = 'Unable to log in. Please try again later.';
//         }
//       });
//     } else {
//       this.errorMessage = 'Please fill in all required fields.';
//     }
//   }
// }


// onLogin() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value)
  //     const { email, password } = this.loginForm.value;
  //     // Fetch registered registrations and validate credentials
  //     this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).subscribe({
  //       next: (registrations) => {
  //         // console.log("> ", registrations, " >> ", registrations.length)
  //         if (registrations.length > 0) {
  //           // Successful login
  //           console.log('Login successful');
  //           // localStorage.setItem('user', JSON.stringify(registrations[0])); // Store user details in local storage
  //           localStorage.setItem("admin","loggedIn");
          
  //           this.router.navigate(['/dashboard']); // Navigate to dashboard after successful login
  //         } else {
  //           // Invalid credentials
  //           this.errorMessage = 'Invalid email or password.';
  //         }
  //       },
  //       error: (err) => {
  //         console.error('Error during login:', err);
  //         this.errorMessage = 'Unable to log in. Please try again later.';
  //       }
  //     });
  //   } else {
  //     this.errorMessage = 'Please fill in all required fields.';
  //   }
  // }




// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { AdminServices } from '../service/adminService';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   errorMessage: string = '';
//   //private apiUrl = 'http://localhost:3000/registrations';  // Your backend URL

//   constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,private adminService:AdminServices) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]]
//     });
//   }

//   get f() {
//     return this.loginForm.controls;  // Access form controls
//   }
//   onLogin(){
//     const {email ,password} = this.loginForm.value;
//     this.adminService.getAuthUsers().subscribe(
//       (data)=>{
//         const user = data.find(
//           (u) => u.email === email && u.password === password
//         );
//         if(user){
//             console.log("LoggedIn succesfull");
//             localStorage.setItem("admin","loggedIn");
//             this.router.navigate(['/dashboard']);
//         }
//         else{
//           console.log("Try Again")
//         }
//       }
//     )
//   }
// }


// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { AdminServices } from '../service/adminService';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   errorMessage: string = '';
//   failedAttempts: number = 0; // Track failed login attempts
//   isLocked: boolean = false; // Track if the account is locked
//   lockDuration: number = 30 * 60 * 1000; // Lock duration (30 minutes)
//   lockEndTime: number | null = null; // Timestamp for lock end time

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient,
//     private router: Router,
//     private adminService: AdminServices
//   ) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]]
//     });

//     // Check if the account was locked previously and restore lock state
//     const lockInfo = localStorage.getItem('lockInfo');
//     if (lockInfo) {
//       const { lockEndTime } = JSON.parse(lockInfo);
//       if (lockEndTime && Date.now() < lockEndTime) {
//         this.isLocked = true;
//         this.lockEndTime = lockEndTime;
//         this.scheduleUnlock();
//       }
//     }
//   }

//   get f() {
//     return this.loginForm.controls; // Access form controls
//   }

//   onLogin() {
//     if (this.isLocked) {
//       const remainingTime = Math.ceil((this.lockEndTime! - Date.now()) / 60000);
//       this.errorMessage = `Account is locked. Try again in ${remainingTime} minutes.`;
//       return;
//     }

//     const { email, password } = this.loginForm.value;

//     this.adminService.getAuthUsers().subscribe((data) => {
//       const user = data.find((u) => u.email === email && u.password === password);

//       if (user) {
//         console.log('Login successful');
//         this.failedAttempts = 0; // Reset failed attempts
//         localStorage.removeItem('lockInfo'); // Clear lock info
//         localStorage.setItem('admin', 'loggedIn');
//         this.router.navigate(['/dashboard']);
//       } else {
//         console.log('Login failed');
//         this.failedAttempts++;
//         this.errorMessage = 'Invalid email or password.';

//         if (this.failedAttempts >= 3) {
//           this.lockAccount();
//         }
//       }
//     });
//   }

//   lockAccount() {
//     this.isLocked = true;
//     this.lockEndTime = Date.now() + this.lockDuration;
//     localStorage.setItem('lockInfo', JSON.stringify({ lockEndTime: this.lockEndTime }));
//     this.errorMessage = `Account locked for 30 minutes due to multiple failed login attempts.`;

//     this.scheduleUnlock();
//   }

//   scheduleUnlock() {
//     const timeoutDuration = this.lockEndTime! - Date.now();
//     setTimeout(() => {
//       this.isLocked = false;
//       this.lockEndTime = null;
//       localStorage.removeItem('lockInfo');
//       this.errorMessage = '';
//     }, timeoutDuration);
//   }
// }




// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AdminServices } from '../service/adminService';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   errorMessage: string = '';
//   failedAttempts: { [email: string]: number } = {}; // Track failed attempts by email
//   lockedAccounts: { [email: string]: number } = {}; // Track locked accounts by email with lock end time
//   lockDuration: number = 30 * 60 * 1000; // Lock duration (30 minutes)

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private adminService: AdminServices
//   ) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]]
//     });

//     // Restore locked accounts from localStorage
//     const lockInfo = localStorage.getItem('lockedAccounts');
//     if (lockInfo) {
//       this.lockedAccounts = JSON.parse(lockInfo);
//     }

//     // Clean up expired locks
//     this.cleanupExpiredLocks();
//   }

//   get f() {
//     return this.loginForm.controls; // Access form controls
//   }

//   onLogin() {
//     const { email, password } = this.loginForm.value;

//     // Check if the account is locked
//     if (this.isAccountLocked(email)) {
//       const remainingTime = Math.ceil((this.lockedAccounts[email] - Date.now()) / 60000);
//       this.errorMessage = `Account is locked. Try again in ${remainingTime} minutes.`;
//       return;
//     }

//     this.adminService.getAuthUsers().subscribe((data) => {
//       const user = data.find((u) => u.email === email && u.password === password);

//       if (user) {
//         this.successfulLogin(email);
//       } else {
//         this.failedLogin(email);
//       }
//     });
//   }

//   successfulLogin(email: string) {
//     console.log('Login successful');
//     this.failedAttempts[email] = 0; // Reset failed attempts for this email
//     delete this.lockedAccounts[email]; // Remove lock for this email if it exists
//     localStorage.setItem('lockedAccounts', JSON.stringify(this.lockedAccounts)); // Update locked accounts
//     localStorage.setItem('admin', 'loggedIn');
//     this.router.navigate(['/dashboard']);
//   }

//   failedLogin(email: string) {
//     this.failedAttempts[email] = (this.failedAttempts[email] || 0) + 1;
//     const remainingAttempts = 3 - this.failedAttempts[email];

//     if (remainingAttempts > 0) {
//       this.errorMessage = `Invalid email or password. ${remainingAttempts} attempt(s) left.`;
//     } else {
//       this.lockAccount(email);
//     }
//   }

//   lockAccount(email: string) {
//     this.lockedAccounts[email] = Date.now() + this.lockDuration; // Set lock end time
//     localStorage.setItem('lockedAccounts', JSON.stringify(this.lockedAccounts)); // Persist lock info
//     this.errorMessage = `Account locked for 30 minutes due to multiple failed login attempts.`;
//   }

//   isAccountLocked(email: string): boolean {
//     const lockEndTime = this.lockedAccounts[email];
//     if (lockEndTime && Date.now() < lockEndTime) {
//       return true;
//     }
//     // Remove expired lock
//     delete this.lockedAccounts[email];
//     localStorage.setItem('lockedAccounts', JSON.stringify(this.lockedAccounts));
//     return false;
//   }

//   cleanupExpiredLocks() {
//     const currentTime = Date.now();
//     for (const email in this.lockedAccounts) {
//       if (this.lockedAccounts[email] < currentTime) {
//         delete this.lockedAccounts[email];
//       }
//     }
//     localStorage.setItem('lockedAccounts', JSON.stringify(this.lockedAccounts));
//   }
// }




// import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { AdminServices } from '../service/adminService';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {
//   loginForm: FormGroup;
//   errorMessage: string = '';
//   failedAttempts: { [email: string]: number } = {}; // Track failed attempts by email
//   lockedAccounts: { [email: string]: number } = {}; // Track locked accounts by email with lock end time
//   lockDuration: number = 30 * 60 * 1000; // Lock duration (30 minutes)

//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private adminService: AdminServices
//   ) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required]]
//     });

//     // Restore locked accounts from localStorage
//     const lockInfo = localStorage.getItem('lockedAccounts');
//     if (lockInfo) {
//       this.lockedAccounts = JSON.parse(lockInfo);
//     }

//     // Clean up expired locks
//     this.cleanupExpiredLocks();
//   }

//   get f() {
//     return this.loginForm.controls; // Access form controls
//   }

//   onLogin() {
//     const { email, password } = this.loginForm.value;

//     // Check if the account is locked
//     if (this.isAccountLocked(email)) {
//       const remainingTime = Math.ceil((this.lockedAccounts[email] - Date.now()) / 60000);
//       this.errorMessage = `Account is locked. Try again in ${remainingTime} minutes.`;
//       return;
//     }

//     this.adminService.getAuthUsers().subscribe((data) => {
//       const user = data.find((u) => u.email === email && u.password === password);

//       if (user) {
//         this.successfulLogin(email);
//       } else {
//         this.failedLogin(email);
//       }
//     });
//   }

//   successfulLogin(email: string) {
//     console.log('Login successful');
//     this.failedAttempts[email] = 0; // Reset failed attempts for this email
//     delete this.lockedAccounts[email]; // Remove lock for this email if it exists
//     localStorage.setItem('lockedAccounts', JSON.stringify(this.lockedAccounts)); // Update locked accounts
//     localStorage.setItem('admin', 'loggedIn');
//     this.router.navigate(['/dashboard']);
//   }

//   failedLogin(email: string) {
//     this.failedAttempts[email] = (this.failedAttempts[email] || 0) + 1;
//     const remainingAttempts = 3 - this.failedAttempts[email];

//     if (remainingAttempts > 0) {
//       this.errorMessage = `Invalid email or password. ${remainingAttempts} attempt(s) left.`;
//     } else {
//       this.lockAccount(email);
//     }
//   }

//   lockAccount(email: string) {
//     this.lockedAccounts[email] = Date.now() + this.lockDuration; // Set lock end time
//     localStorage.setItem('lockedAccounts', JSON.stringify(this.lockedAccounts)); // Persist lock info
//     this.errorMessage = `Account locked for 30 minutes due to multiple failed login attempts.`;
//   }

//   isAccountLocked(email: string): boolean {
//     const lockEndTime = this.lockedAccounts[email];
//     if (lockEndTime && Date.now() < lockEndTime) {
//       return true;
//     }
//     // Remove expired lock
//     delete this.lockedAccounts[email];
//     localStorage.setItem('lockedAccounts', JSON.stringify(this.lockedAccounts));
//     return false;
//   }

//   cleanupExpiredLocks() {
//     const currentTime = Date.now();
//     for (const email in this.lockedAccounts) {
//       if (this.lockedAccounts[email] < currentTime) {
//         delete this.lockedAccounts[email];
//       }
//     }
//     localStorage.setItem('lockedAccounts', JSON.stringify(this.lockedAccounts));
//   }
// }


import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServices } from '../service/adminService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  lockDuration = 30 * 60 * 1000; // Lock duration: 30 minutes
  failedAttempts: { [email: string]: number } = {}; // Tracks failed attempts per email
  lockedAccounts: { [email: string]: number } = {}; // Tracks lockout expiration time per email

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private adminService: AdminServices
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.loadLockedAccounts();
  }

  get f() {
    return this.loginForm.controls; // Access form controls
  }

  onLogin() {
    const { email, password } = this.loginForm.value;

    if (this.isAccountLocked(email)) {
      const remainingTime = Math.ceil((this.lockedAccounts[email] - Date.now()) / 60000);
      this.errorMessage = `Account is locked. Try again in ${remainingTime} minute(s).`;
      return;
    }

    this.adminService.getAuthUsers().subscribe((users) => {
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        this.loginSuccess(email);
      } else {
        this.loginFailure(email);
      }
    });
  }

  private loginSuccess(email: string) {
    this.failedAttempts[email] = 0; // Reset failed attempts for this email
    delete this.lockedAccounts[email]; // Remove lock on successful login
    this.saveLockedAccounts(); // Update local storage
    localStorage.setItem('admin', 'loggedIn');
    this.router.navigate(['/dashboard']);
  }

  private loginFailure(email: string) {
    this.failedAttempts[email] = (this.failedAttempts[email] || 0) + 1;
    const attemptsLeft = 3 - this.failedAttempts[email];

    if (attemptsLeft > 0) {
      this.errorMessage = `Invalid email or password. ${attemptsLeft} attempt(s) left.`;
    } else {
      this.lockAccount(email);
    }
  }

  private lockAccount(email: string) {
    this.lockedAccounts[email] = Date.now() + this.lockDuration; // Lock for 30 minutes
    this.saveLockedAccounts(); // Save lock info in localStorage
    this.errorMessage = `Account locked for 30 minutes due to multiple failed login attempts.`;
  }

  private isAccountLocked(email: string): boolean {
    const lockEndTime = this.lockedAccounts[email];
    if (lockEndTime && Date.now() < lockEndTime) {
      return true; // Account is still locked
    }

    // Remove expired lock
    if (lockEndTime) {
      delete this.lockedAccounts[email];
      this.saveLockedAccounts();
    }
    return false;
  }

  private loadLockedAccounts() {
    const savedData = localStorage.getItem('lockedAccounts');
    if (savedData) {
      this.lockedAccounts = JSON.parse(savedData);
    }
  }

  private saveLockedAccounts() {
    localStorage.setItem('lockedAccounts', JSON.stringify(this.lockedAccounts));
  }
}
