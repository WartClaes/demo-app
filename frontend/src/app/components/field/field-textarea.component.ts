import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'in-field-textarea',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './field-textarea.component.html',
  styleUrl: './field.component.css',
})
export class InFieldTextarea {
  @Input() label: string = '';
  @Input() control: FormControl;
}
