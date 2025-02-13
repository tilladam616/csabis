import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  bookingForm!: FormGroup;
  title = 'foglals';
  appointments: any[] = [];

  constructor(private apiService: ApiService, private fb: FormBuilder) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      nev: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required]
    });
  }

  fetchAppointments(): void {
    this.apiService.getAppointment().subscribe(
      (data) => {
        this.appointments = data;
        console.log('Appointments:', this.appointments);
      },
      (error) => {
        console.error('Error fetching appointments:', error);
      });
  }
    submitForm() {
      if (this.bookingForm.valid) {
        console.log(this.bookingForm.value);    
    }
  }
}
