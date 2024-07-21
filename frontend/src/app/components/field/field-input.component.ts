import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'in-field-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './field-input.component.html',
  styleUrl: './field.component.css',
})
export class InFieldInput {
  @Input() label: string = '';
  @Input() control: FormControl;
}
