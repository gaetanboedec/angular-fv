import { CommonModule } from '@angular/common';
import { Component, input, model, output } from '@angular/core';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.html',
  imports: [CommonModule],
})
export class DrawerComponent {
  open = model.required<boolean>();

  closeDrawer() {
    this.open.update(() => false);
  }
}

@Component({
  selector: 'drawer-header',
  templateUrl: './drawer-header.html',
  imports: [CommonModule, ButtonComponent],
})
export class DrawerHeaderComponent {
  headerTitle = input('Header title');

  closeDrawerFromHeader = output<void>();

  onClose() {
    this.closeDrawerFromHeader.emit();
  }
}
