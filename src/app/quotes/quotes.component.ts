import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes = [
   new Quote(1,"Jack","You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.","Dr. Suess",new Date()),
   new Quote(2,"Jim","The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.","Mark Caine",new Date()),
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
