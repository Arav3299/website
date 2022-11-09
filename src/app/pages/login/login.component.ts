import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnDestroy{

  current:any;

  loginForm:FormGroup;

  constructor(private formBuilder:FormBuilder,private navi:Router,private service : ApiService,@Inject(DOCUMENT) private document: Document) {

    this.loginForm=this.formBuilder.group({
      email:['',Validators.required],
      pass:['',Validators.required]
    })

   }

   get email(){
return this.loginForm.get('email');

   }

   get pass(){
    return this.loginForm.get('pass');
    
       }

       ngOnInit() {
        this.document.body.classList.add('bodybg-color');
        // OR you can Add inline style css with the help of code below
        // this._document.body.style.background = '#fff';
    }
      ngOnDestroy() {
       
        this.document.body.classList.remove('bodybg-color');
      }
    

  toSignup(){

    this.navi.navigateByUrl("signuppage")

  }

  toLogin(){

    if(this.loginForm.valid){
      this.service.loginUser(this.loginForm.value).subscribe({
        next:(data:any)=>{
          console.log(data);
          this.current=data;
          if(this.current==null){
            Swal.fire({
              title: 'OOPs!',
              text: 'Check your Email and Password',
              icon: 'error',
            toast: false,
            allowOutsideClick: false
            })
          }else{
            localStorage.setItem("current",JSON.stringify(data))
            Swal.fire({
              title: 'LoggedIn Succesfully!',
              text: 'Press Ok to Continue Purchase',
              icon: 'success',
            toast: false,
            allowOutsideClick: false
            }).then(() =>{
            this.service.shown.next(true);
            this.navi.navigate(['']);
        });
          }
         
        }
      })
    }

  }
}
