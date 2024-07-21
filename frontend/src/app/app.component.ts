import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService, RequestData } from './app.service';
import { FormBuilder, ReactiveFormsModule, FormArray, Validators, FormControl } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { InFieldInput, InFieldTextarea } from './components/field';
import { InButton } from './components/button';
import { InOutput } from './components/output';
import { InSocials } from './components/socials';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgFor, NgIf, InFieldInput, InFieldTextarea, InButton, InOutput, InSocials],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  form = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    skills: ['', [Validators.required]],
    socials: this.formBuilder.array([
      this.formBuilder.group({
        type: [''],
        url: [''],
      }),
    ]),
  });
  response = '';

  constructor(
    private appService: AppService,
    private formBuilder: FormBuilder,
  ) {}

  get firstName() {
    return this.form.get('firstName') as FormControl;
  }

  get lastName() {
    return this.form.get('lastName') as FormControl;
  }

  get skills() {
    return this.form.get('skills') as FormControl;
  }

  get socials() {
    return this.form.get('socials') as FormArray;
  }

  addSocial() {
    this.socials.push(this.formBuilder.group({
      type: this.formBuilder.control(''),
      url: this.formBuilder.control(''),
    }));
  }

  removeSocial(index: number) {
    this.socials.removeAt(index);
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.appService.postData(this.form.value as RequestData).subscribe({
      next: (data) => this.response = data,
      error: (error) => console.error('Error when fetching data', error),
    });
  }
}
