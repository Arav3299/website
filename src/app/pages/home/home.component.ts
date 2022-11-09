import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiService,private navi:Router) { }

  contents:any;

  count:any;

  @Output() newItemEvent = new EventEmitter();

  customOptions!: OwlOptions;

  cartShow=false;

  ngOnInit(): void {

    // history.state.data=this.cartShow;

    this.count=this.service.countForCart;

    this.service.getAllContents().subscribe({
      next:(data)=>{
        this.contents=data;
        console.log(this.contents);
        localStorage.setItem("human",JSON.stringify(data));
        
      },
      error:(err)=>{
        console.log(err);
        
      },
      complete:()=>{
console.log("subscription completed");

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
      dots: false,
      navText: ['&#8249', '&#8250;'],
      autoplayTimeout:1000,
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

  onCartClick(){
    this.service.data.next(this.count++);
  }

  toMen(){
    this.navi.navigate(['tomen'])
  }

  toWomen(){
    this.navi.navigate(['towomen'],{state:{data:this.contents}})
  }


 

}

