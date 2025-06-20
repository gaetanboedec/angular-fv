import { Component, output } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  onClick = output();
}
