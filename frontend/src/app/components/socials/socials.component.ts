import { NgForOf, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InButton } from '../button';

@Component({
  selector: 'in-socials',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgForOf, InButton],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css',
})
export class InSocials {
  @Input() label: string = '';
  @Input() form: FormGroup;
  @Input() group: string;

  @Output() addSocial = new EventEmitter<void>();
  @Output() removeSocial = new EventEmitter<number>();

  get socials() {
    return this.form.get(this.group) as FormArray;
  }

  onClickAdd(event: Event) {
    // stop event from bubbling to form
    event.stopPropagation();

    this.addSocial.emit();
  }

  onClickRemove(index: number, event: Event) {
    // stop event from bubbling to form
    event.stopPropagation();

    this.removeSocial.emit(index);
  }
}
