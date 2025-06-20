import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from '../components/drawer/drawer.component';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrawerComponent, ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-fv';

  drawerOpen = signal(false);

  openDrawer() {
    this.drawerOpen.set(true);
  }
}
