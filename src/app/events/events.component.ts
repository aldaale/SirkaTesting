import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEvents().subscribe((data) => {
      console.log(data);
      this.events = data['events'];
    });
  }


};


