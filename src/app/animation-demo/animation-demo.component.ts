import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],

  animations: [
    trigger("openClose", [
      state('open',
        style({
          height: '400px',
          backgroundColor: 'blue'
        })
      ),
      state('close',
        style({
          height: '200px',
          backgroundColor: 'red'
        })
      ),
      transition('open=>close', [
        animate('2s')
      ]),
      transition('close=>open', [
        animate('1s')
      ])
    ])
  ]
})
export class AnimationDemoComponent implements OnInit {
  isOpen=true

  constructor() { }

  ngOnInit(): void {
  }

  toggle()
  {
    this.isOpen=!this.isOpen
  }

}
