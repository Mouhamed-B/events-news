import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  @Input() event:any;
  constructor() { }

  ngOnInit(): void {
  }

}
