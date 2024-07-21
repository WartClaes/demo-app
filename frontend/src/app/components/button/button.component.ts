import { Component, Input } from "@angular/core";

@Component({
  selector: 'in-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class InButton {
  @Input() text: string;
  @Input() size: 'default' | 'small' = 'default';
  @Input() color: 'primary' | 'secondary' | 'link' = 'primary';
  @Input() type: HTMLButtonElement['type'] = 'button';
}
