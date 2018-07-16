import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      this.gallery_swiper();
      this.product_swiper();
  }
  // Gallery Carousel
  gallery_swiper(): void {
      const swiper = new Swiper('.g-carousel-container',
      {
          slidesPerView: 4,
          autoplay:
          {
              delay: 2500,
              disableOnInteraction: false
          },
          spaceBetween: 16,

          breakpoints: {
              1024: {
                  slidesPerView: 4,
                  spaceBetween: 40
              },
              768: {
                  slidesPerView: 3,
                  spaceBetween: 30
              },
              640: {
                  slidesPerView: 2,
                  spaceBetween: 20
              },
              320: {
                  slidesPerView: 1,
                  spaceBetween: 10
              }
          },

         // Navigation arrows
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         },

     });
  }
  // Product Listing Carousel
  product_swiper(): void {
      const swiper = new Swiper('.product-container',
      {
          slidesPerView: 4,
          autoplay:
          {
              delay: 2500,
              disableOnInteraction: false,
          },
          spaceBetween: 16,

          breakpoints: {
              1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
              },
              768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
              },
              640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
              },
              320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
              }
          },

         // Navigation arrows
         navigation: {
             nextEl: '.swiper-button-next',
             prevEl: '.swiper-button-prev',
         },

     });
  }
}
