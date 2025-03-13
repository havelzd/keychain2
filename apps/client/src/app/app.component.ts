import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimaryNavComponent } from "./common/primary-nav/primary-nav.component";
import { PrimaryHeaderComponent } from './common/primary-header/primary-header.component';

@Component({
  imports: [RouterModule, PrimaryNavComponent, PrimaryHeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
