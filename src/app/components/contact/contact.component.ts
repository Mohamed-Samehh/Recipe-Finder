import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message: { text: string; type: 'success' | 'error' } | null = null;
  submitted = false;

  onSubmit(form: any): void {
    this.submitted = true;
    if (form.valid) {
      this.message = { text: 'Your recipe suggestion has been sent. Thanks for sharing!', type: 'success' };
      this.resetForm(form);
    } else {
      this.message = { text: 'There are errors in the form. Please correct them and try again.', type: 'error' };
    }
  }

  resetForm(form: any): void {
    this.submitted = false;
    form.resetForm();
  }
}
