import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  DrawerComponent,
  DrawerHeaderComponent,
} from '../components/drawer/drawer';
import { ButtonComponent } from '../components/button/button';
import {
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
import { CommonModule } from '@angular/common';
import { Table } from '../components/table/table';

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
    Table,
    CommonModule,
  ],
  templateUrl: './app.html',
})
export class App {
  protected title = 'angular-fv';
  readonly TaskIcon = ListTodoIcon;
  readonly BusinessFunctionIcon = WorkflowIcon;
  readonly ContractsIcon = SignatureIcon;

  businessFunctionsHeaders = ['Name', 'Actions'];
  businessFunctionsRows = [
    { id: '1', name: 'Function 1' },
    { id: '2', name: 'Function 2' },
    { id: '3', name: 'Function 3' },
    { id: '4', name: 'Function 4' },
  ];

  drawerOpen = signal(false);

  openDrawer() {
    this.drawerOpen.set(true);
  }

  closeDrawer() {
    this.drawerOpen.set(false);
  }
}
