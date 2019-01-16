import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"","","", new Date());
  @Output() addNewQuote = new EventEmitter<Quote>();

  submitQuote(){
    this.addNewQuote.emit(this.newQuote);
    this.newQuote = new Quote(0,"","","", new Date());
  }
  constructor() { }

  ngOnInit() {
  }

}
