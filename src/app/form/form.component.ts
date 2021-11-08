import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../app.component.scss']
})
export class FormComponent implements OnInit {

  outputX: number[];
  selectedX: number;
  resultsX: number[] = [-1.5, -1, -0.5, 0, 0.5, 1, 1.5];

  outputY: number[];
  selectedY: number = 0;
  resultsY: number[] = [-1.5, -1, -0.5, 0, 0.5, 1, 1.5];

  searchX(event) {
    console.log('event', event);
    this.outputX = this.resultsX.filter(c => c.toString().startsWith(event.query));
  }

  searchY(event) {
    console.log('event', event);
    this.outputY = this.resultsY.filter(c => c.toString().startsWith(event.query));
  }


  ngOnInit(): void {
  }

}