import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [EventoService],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent implements OnInit{
  eventos: any[] = [];
  constructor(private eventService: EventoService) {}
  ngOnInit() {
    this.eventService.GetEvento().subscribe({
      next: (eventos: any) => {this.eventos = eventos}
    });
  }
}
