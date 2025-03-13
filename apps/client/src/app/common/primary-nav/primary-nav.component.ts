import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import navItems from './nav-items';
import { NgIcon, provideIcons } from '@ng-icons/core';

const navIcons = navItems
  .map((item) => item.icon)
  .reduce((acc, icon) => ({ ...acc, ...icon }), {});

@Component({
  selector: 'app-primary-nav',
  imports: [RouterLink, RouterLinkActive, NgIcon],
  templateUrl: './primary-nav.component.html',
  styleUrl: './primary-nav.component.css',
  providers: [provideIcons(navIcons)],
})
export class PrimaryNavComponent {
  protected readonly items = navItems;
}
