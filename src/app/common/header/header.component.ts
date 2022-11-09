import { Router } from '@angular/router';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{



   shown:any;
    
   count:any;
    
   current:any;

  constructor(private navi : Router,private service:ApiService) { 
    this.count=this.service.countForCart;
  }
 
  


  ngOnInit(): void {

    this.current = localStorage.getItem('current');
    // this.current=JSON.parse(localStorage.getItem('current') || {});

    console.log(this.current);
    
    this.service.data$.subscribe(res => this.count = res)
    this.service.shown$.subscribe(res => this.shown=res)

  }


  onClick(){
  // var a = document.querySelector('.first-button').addEventListener('click', function () {

  //   document.querySelector('.animated-icon1').classList.toggle('open');
  //   });

}

  
countIncrease(){

    this.count=this.count++;

  }


  tologin(){
    this.navi.navigateByUrl('loginpage');
  }

  logout(){
    localStorage.removeItem('current')
    this.service.shown.next(false);
  }

  toMen(){
    this.navi.navigateByUrl('tomen');
  }

  toWomen(){
    this.navi.navigateByUrl('towomen');
  }

  toShoes(){
    this.navi.navigateByUrl('toshoes');
  }

}
