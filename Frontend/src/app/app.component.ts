import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Libroteka';
}
