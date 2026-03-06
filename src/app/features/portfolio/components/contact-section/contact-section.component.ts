import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FadeInDirective } from '../../../../shared/directives/fade-in.directive';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule, FadeInDirective],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {
  @Input({ required: true }) heading = '';
  @Input({ required: true }) description = '';

  protected contactForm: FormGroup;
  protected submitted = false;
  protected success = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  protected onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Simulate form submission
    this.success = true;
    this.contactForm.reset();
    this.submitted = false;

    setTimeout(() => {
      this.success = false;
    }, 5000);
  }

  protected getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return `${fieldName} is required`;
    if (control.errors['minlength']) return `${fieldName} is too short`;
    if (control.errors['email']) return 'Please enter a valid email';

    return '';
  }
}

