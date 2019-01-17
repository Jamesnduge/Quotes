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
   new Quote(2,"John","When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.","Helen Keller",new Date()),
   new Quote(2,"Mark","Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.","Mark Twain",new Date()),
   new Quote(2,"Cyprian","When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.","Audre Lorde",new Date()),
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
