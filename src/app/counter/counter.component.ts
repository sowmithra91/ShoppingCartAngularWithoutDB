import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() counterChild: ICounter;
  @Output() counterToEmit = new EventEmitter<ICounter>();

  count = 0;
  errorMessage ="Count Can not be negative";
  isError = false;

  constructor() { }

  ngOnInit() {
  }

  incrementCount(counter:any) : void {
    if(counter.count === 0){
      this.isError = false;
    }
    counter.count++;
  }

  decrementCount(counter:any) : void {
    if(counter.count === 0){
      this.isError = true;
    }else{
      counter.count--;
    }
  }

  sendIdToParent(counterChild: ICounter) {
    this.counterToEmit.emit(counterChild);
  }
}
