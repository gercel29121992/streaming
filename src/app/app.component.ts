import { Component } from '@angular/core';
 
declare var $ :any;
declare function HOME_INIT([]):any;  
declare function INIT_SWPER([]):any;  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Streaming';
  constructor(){

  }
  ngOnInit(): void{

   setTimeout(() => {
    INIT_SWPER($)
    HOME_INIT($);
   }, 50);

  }
}
