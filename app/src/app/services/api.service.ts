import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private alapUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAppointment(): Observable<any> {
    return this.http.get( `${this.alapUrl}/foglalas`);
  }

  createAppointment(data: any): Observable<any> {
    return this.http.post(`${this.alapUrl}/foglalas `, data);
  }

  deleteAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.alapUrl}/foglalas/${id}`);
  }
}