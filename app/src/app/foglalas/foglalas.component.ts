import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-foglalas',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './foglalas.component.html',
  styleUrl: './foglalas.component.css'
})
export class FoglalasComponent {
  foglalsok = new FormGroup({
    nev: new FormControl(''),
    email: new FormControl(''),
    datum: new FormControl('')
  });

  constructor(private http: HttpClient) {}

  adatBe() {
    this.http.post('http://localhost:3000/foglalas', this.foglalsok.value).subscribe(valasz => console.log('Adatok:', this.foglalsok.value));
  }
}
