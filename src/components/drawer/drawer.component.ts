import { CommonModule } from '@angular/common';
import { Component, model } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  imports: [CommonModule],
})
export class DrawerComponent {
  open = model.required<boolean>();

  closeDrawer() {
    this.open.update(() => false);
  }
}
