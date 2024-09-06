import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IndexComponent } from './index/index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
