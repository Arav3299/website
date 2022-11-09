import { ApiService } from './services/api.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'E_Commerce_Website';

  count :any;

  constructor(private service : ApiService){ }

  ngOnInit(){
    if(localStorage.getItem('current')===null && localStorage.getItem('user')===null){
      this.service.shown.next(false);
    }else{
      this.service.shown.next(true); 
    }
  }

  onCartClick(coun : any){
    this.count=coun;
  }

  isShow: boolean | undefined;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition);
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });

}

}
