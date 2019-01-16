import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes = [
   new Quote(1,"Jack","n fvjndsofknvcksn djkvzxcn kjn zxkcn jknnx jjc jnjvdn zxjmn","McClamore",new Date()),
   new Quote(2,"Jim","n fvjndsofknvcksn djkvzxcn kjn zxkcn jknnx jjc jnjvdn zxjmn","McTommminay",new Date()),
 ]
 toggleDetails(index){
   this.quotes[index].showDescription = !this.quotes[index].showDescription;
 }
 delete(notNeeded, index){
   if(notNeeded){
     this.quotes.splice(index, 1);
   }
 }
 addQuote(quote){
  let quoteLength= this.quotes.length;
  quote.id = quoteLength + 1 ;
  quote.date = new Date(quote.date)
  this.quotes.push(quote)
 }
  constructor() { }

  ngOnInit() {
  }

}
