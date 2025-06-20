import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  ContentChild,
  forwardRef,
  inject,
  input,
  model,
  signal,
  TemplateRef,
} from '@angular/core';
import {
  ChevronDownIcon,
  EllipsisIcon,
  LucideAngularModule,
  LucideIconData,
} from 'lucide-angular';

@Component({
  selector: 'accordion',
  imports: [],
  templateUrl: './accordion.html',
})
export class Accordion {
  open = signal<boolean>(false);
}

@Component({
  selector: 'accordion-summary',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './accordion-summary.html',
})
export class AccordionSummary {
  readonly ChevronIcon = ChevronDownIcon;
  readonly MoreIcon = EllipsisIcon;

  accordionRef = inject(forwardRef(() => Accordion));

  open = computed(() => this.accordionRef.open());

  title = input<string>('Accordion Summary');
  icon = input<LucideIconData | undefined>();

  @ContentChild('info', { read: TemplateRef }) info:
    | TemplateRef<any>
    | undefined;

  toggle() {
    this.accordionRef.open.update((prev: boolean) => !prev);
  }
}

@Component({
  selector: 'accordion-details',
  imports: [CommonModule],
  templateUrl: './accordion-details.html',
})
export class AccordionDetails {
  accordionRef = inject(forwardRef(() => Accordion));

  open = computed(() => this.accordionRef.open());
}
