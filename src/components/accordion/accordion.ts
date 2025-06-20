import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  forwardRef,
  inject,
  input,
  model,
  signal,
} from '@angular/core';
import {
  ChevronDownIcon,
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

  accordionRef = inject(forwardRef(() => Accordion));

  open = computed(() => this.accordionRef.open());

  title = input<string>('Accordion Summary');
  icon = input<LucideIconData | undefined>();

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
