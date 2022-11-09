import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  women:any
  constructor(private service:ApiService) { }

  ngOnInit(): void {
   
    var one = JSON.parse(localStorage.getItem('human') || '[]');
    this.women=one;
  }

  toSend(woman:any){
    this.service.toSendEmail(woman).subscribe({
      next : (data)=>{
        console.log(data);
      },
      error : (err)=>{
        console.log(err);
        
      }
    })
  }

}
