import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator} from 'src/app/Validators/password-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupform:FormGroup;
  submitted=false;
  ngOnInit(): void {
  
   
    
  
  }

  constructor(private formBuilder : FormBuilder,private navi :Router,private service:ApiService) {
    // this.user=history.state.data; 
    // console.log(this.user);
    this.signupform= this.formBuilder.group({
      name: new FormControl('',[Validators.required]),
      phone:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      pass:['',Validators.required],
      cpass: new FormControl ('',[Validators.required])
    },
      {
        validator: ConfirmPasswordValidator("pass", "cpass")
      }
    
    );
  }

  get pass(){
    return this.signupform.get('pass')
  }

  get cpass(){
    return this.signupform.get('cpass')
  }

  get name(){
    return this.signupform.get('name')
  }

  get age(){
    return this.signupform.get('age')
  }
  get gender(){
    return this.signupform.get('gender')
  }
  get phone(){
    return this.signupform.get('phone')
  }
  get email(){
    return this.signupform.get('email')
  }

  get passwordMatchError() {
    return (
      this.signupform.getError('mismatch') && this.signupform.get('cpass')?.touched
    );
  }

  onSubmit(){
    this.submitted=true;
    if(this.signupform.valid){
      console.log(this.signupform);
      // alert("Form is submitted...")
      this.service.shown.next(true);
      this.service.saveUser(this.signupform.value).subscribe({
        
        next:(data:any)=>{
          // alert();
          localStorage.setItem("user",JSON.stringify(data));
        },
        error:(err)=>{
          console.log(err);
        }
      })
      this.navi.navigate(['']);
    }
  }


}
