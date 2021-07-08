import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventList implements OnInit {

  @Input() events: Array<any> | null= [];
  constructor() { }

  ngOnInit(): void {
  }

}
