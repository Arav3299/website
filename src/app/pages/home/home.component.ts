import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiService) { }

  contents:any;

  customOptions!: OwlOptions;

  ngOnInit(): void {

    this.service.getAllContents().subscribe({
      next:(data)=>{
        this.contents=data;
        console.log(this.contents);
        
      }
    })

    this.carouseldata();
    
  

  }

  
  carouseldata(){

  
    
    this.customOptions = {
      loop: true,
      autoplay:true,
      center:false,
      autoHeight:true,
      autoWidth:true,
      // mouseDrag: false,
      // touchDrag: false,
      // pullDrag: false,
      dots: false,
      // navSpeed: 700,
      navText: ['&#8249', '&#8250;'],
      autoplayTimeout:1000,
      // items:12,
      responsive: {
        0: {
          items: 1 
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }, 
        
      },
      nav: true,
    }

 

  }
 

}

