import { Component, OnInit } from '@angular/core';
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


  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
  }

  //2 way
  login() {
    var acno = this.acno
    var pswd = this.pswd
    const result = this.ds.login(acno, pswd)
    if (result) {
      alert("login successful")
      this.router.navigateByUrl('dashboard')
    }
  }
}
