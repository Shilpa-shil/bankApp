import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //PROPERTIES
  aim = "perfect banking partner"
  accno = "Account number please"
  acno = ""
  pswd = ""

   //form group
   loginForm = this.fb.group({
    acno: ['',[Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
  
  })

  constructor(private router: Router, private ds: DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  //2 way
  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd
if(this.loginForm.valid){

    const result = this.ds.login(acno, pswd)
    if (result) {
      alert("login successful")
      this.router.navigateByUrl('dashboard')
    }
  }
  else{
    alert("invalid form")
  }
  }
}
