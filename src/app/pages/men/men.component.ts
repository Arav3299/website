import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  men:any=[];
  count:any;
  constructor(private service:ApiService) { }

  ngOnInit(): void {
 
    var one = JSON.parse(localStorage.getItem('human') || '[]');
    this.men=one;
  }

  toSend(man:any){

    this.service.toSendEmail(man).subscribe({
      next : (data)=>{
        console.log(data);
      },
      error : (err)=>{
        console.log(err);
        
      }
    })

  }

}
