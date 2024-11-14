import { Component, model, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './model/user.model';
import { UserService } from './service/user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PracticeApp';
  users?: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    console.log("asynchronous retriving the data from the server");
    this.userService.getUsers().subscribe(data => this.users = data);
  }
}