import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroUserCircleSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-primary-header',
  imports: [LogoComponent, NgIcon],
  templateUrl: './primary-header.component.html',
  styleUrl: './primary-header.component.css',
  providers: [provideIcons({ heroUserCircleSolid})]
})
export class PrimaryHeaderComponent {}
