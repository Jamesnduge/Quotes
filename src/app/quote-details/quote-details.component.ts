import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() notNeeded = new EventEmitter<boolean>();
  delete(trash:boolean){
    this.notNeeded.emit(trash);
  }
  likes: number= 0;
  disLikes:number = 0;
  upVote(){
    return this.likes++;
    
  }
  downVote(){
    var dislike = this.disLikes++;
    return dislike;
  }
  constructor() { }

  ngOnInit() {
  }

}
