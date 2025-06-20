import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DrawerComponent,
  DrawerHeaderComponent,
} from '../components/drawer/drawer';
import { ButtonComponent } from '../components/button/button';
import { ListTodo, ListTodoIcon, LucideAngularModule } from 'lucide-angular';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '../components/accordion/accordion';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DrawerComponent,
    ButtonComponent,
    DrawerHeaderComponent,
    LucideAngularModule,
    Accordion,
    AccordionSummary,
    AccordionDetails,
  ],
  templateUrl: './app.html',
})
export class App {
  protected title = 'angular-fv';
  readonly TaskIcon = ListTodoIcon;

  drawerOpen = signal(false);

  openDrawer() {
    this.drawerOpen.set(true);
  }

  closeDrawer() {
    this.drawerOpen.set(false);
  }
}
