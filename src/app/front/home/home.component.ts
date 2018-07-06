import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.carousel();
  }

  carousel()
  
  {
  	$('#theCarousel').carousel({
  	  interval: 2000
  	})

  	$('.multi-item-carousel .item').each(function(){
  	  var next = $(this).next();
  	  if (!next.length) {
  	    next = $(this).siblings(':first');
  	  }
  	  next.children(':first-child').clone().appendTo($(this));
  	  
  	  if (next.next().length>0) {
  	    next.next().children(':first-child').clone().appendTo($(this));
  	  }
  	  else {
  	  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  	  }
  	});
  }

}


