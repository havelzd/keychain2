import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroLockClosedSolid  } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-logo',
  imports: [NgIcon],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css',
  providers: [provideIcons({ heroLockClosedSolid })],
})
export class LogoComponent {}
