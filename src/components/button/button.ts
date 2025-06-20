import { Component, output } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.html',
})
export class ButtonComponent {
  onClick = output();
}
