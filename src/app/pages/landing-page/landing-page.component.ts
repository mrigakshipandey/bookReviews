import { animate, query, sequence, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('moveDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-1rem)' }),
        animate(2000)
      ])
    ]),
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms 2000ms')
      ])
    ]),    
  ]
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
