import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-cart',
  templateUrl: './counter-cart.component.html',
  styleUrls: ['./counter-cart.component.css']
})
export class CounterCartComponent implements OnInit {
  ngOnInit(): void {
  }

  counters:ICounter[] = [];

  getCount() : number {
    let count = 0;
    this.counters.forEach(counter => {
      count = count + counter.count;
    });
    return count;
  }

  addCounter() : void {
    let sortedIds = this.counters.map(a => a.id);
    sortedIds.sort((a,b) => (a - b));
    console.log(sortedIds);
    let missingId = null;
    if(this.counters.length === 0){
      missingId = 1;
    } else if(this.counters.length-sortedIds[sortedIds.length-1] === 1) {
      console.log("1 "+ (this.counters.length-sortedIds[sortedIds.length-1]));
      missingId = this.findMissingId(sortedIds);
    } else if(this.counters.length-sortedIds[sortedIds.length-1] === 0) {
      console.log("2 "+ (this.counters.length-sortedIds[sortedIds.length-1]));
      missingId = this.counters.length+1;
    } else {
      console.log("3 "+ (this.counters.length-sortedIds[sortedIds.length-1]));
      missingId = this.findMultipleMissingId(sortedIds)[0];
    }
    console.log("missingId : "+ missingId);
    this.counters.push({'id' : missingId, 'count' : 0});
  }

  findMissingId(sortedIds:number[]) : number {
    let i:number, missingNumber:number;
    missingNumber = (sortedIds.length+1) * (sortedIds.length + 2) / 2
    sortedIds.forEach((number => missingNumber -= number)) 
    return missingNumber;
  }

  findMultipleMissingId(sortedIds:number[]) : number[] {
    let missingNumber:number[] = [];
    let register : number[] = new Array(sortedIds.length+1).fill(0);
    sortedIds.forEach(i => register[i] = 1);
    register[0] = 1;
    register.forEach((value,index) => (value===0)?missingNumber.push(index):console.log(index));
    return missingNumber;
  }

  deleteCounter(counterChild: ICounter) {
    console.log("Id to delete " + counterChild.id);
    this.counters.splice(this.counters.indexOf(counterChild),1);
  }

}
