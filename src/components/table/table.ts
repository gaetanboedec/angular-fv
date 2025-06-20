import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'table-component',
  imports: [CommonModule, NgTemplateOutlet],
  templateUrl: './table.html',
})
export class Table<T extends Record<string, any>> {
  headers = input<string[]>([]);
  rows = input<T[]>([]);

  @ContentChild('body', { read: TemplateRef }) body:
    | TemplateRef<any>
    | undefined;
}
