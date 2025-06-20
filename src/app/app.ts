import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DrawerComponent,
  DrawerHeaderComponent,
} from '../components/drawer/drawer';
import { ButtonComponent } from '../components/button/button';
import {
  ListTodo,
  ListTodoIcon,
  LucideAngularModule,
  SignatureIcon,
  WorkflowIcon,
} from 'lucide-angular';
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
  readonly BusinessFunctionIcon = WorkflowIcon;
  readonly ContractsIcon = SignatureIcon;

  drawerOpen = signal(false);

  openDrawer() {
    this.drawerOpen.set(true);
  }

  closeDrawer() {
    this.drawerOpen.set(false);
  }
}
