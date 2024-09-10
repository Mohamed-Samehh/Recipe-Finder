import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit(form: any): void {
    if (form.valid) {
      alert('Form submitted successfully!');
      this.resetForm(form);
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  resetForm(form: any): void {
    form.resetForm();
  }
}
