import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // template : ` <h1> hello </h1> <br> 
  // <h2>Property : {{title}}`,
  // styles : `h1 {font-weight: bold; color:red}`,
})
export class AppComponent {
  title = 'angularProject';
}
