import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  http = inject(HttpClient);
  GetEvento(): Observable<any[]> {
    return this.http.get<any[]>('https://localhost:44337/api/Evento');
  }
}
