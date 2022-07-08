import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //DATABASE
  // db: any = {
  //   1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000, transaction: [] },
  //   1001: { "acno": 1001, "username": "Lysha", "password": 1001, "balance": 5000, transaction: [] },
  //   1002: { "acno": 1002, "username": "vypa", "password": 1002, "balance": 3000, transaction: [] }
  // }

  currentUser: any
  currentAcno: any

  constructor(private http: HttpClient) {
    // this.getDetails()
  }

  //get deatils from local storage
  // getDetails() {
  //   if (localStorage.getItem("database")) {
  //     this.db = JSON.parse(localStorage.getItem("database") || '')
  //   }
  //   if (localStorage.getItem("currentUser")) {
  //     this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
  //   }
  //   if (localStorage.getItem("currentAcno")) {
  //     this.currentAcno = JSON.parse(localStorage.getItem("currentAcno") || '')
  //   }
  // }

  //save details
  // saveDetails() {
  //   if (this.db) {
  //     localStorage.setItem("database", JSON.stringify(this.db))
  //   }
  //   if (this.currentUser) {
  //     localStorage.setItem("currentUser", JSON.stringify(this.currentUser))

  //   }
  //   if (this.currentAcno) {
  //     localStorage.setItem("currentAcno", JSON.stringify(this.currentAcno))

  //   }
  // }

  //login
  login(acno: any, pswd: any) {
    const data = {
      acno,
      pswd
    }
    //async
    return this.http.post('http://localhost:3000/login', data)
  }

  //register
  register(username: any, acno: any, password: any) {
    const data = {
      username,
      acno,
      password
    }
    //async
    return this.http.post('http://localhost:3000/register', data)
  }
  //deposit
  deposit(acno: any, pswd: any, amt: any) {
    const data = {
      acno, pswd, amt
    }
    return this.http.post('http://localhost:3000/deposit', data,this.getOptions())
  }

  getOptions(){
    const token=localStorage.getItem('token')
    let headers = new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers= headers
    }
    return options
  }

  //withdraw
  withdraw(acno: any, pswd: any, amt: any) {
    const data ={
      acno,pswd,amt
    }
    return this.http.post('http://localhost:3000/withdraw', data,this.getOptions())

  }
 
  //transaction
  getTransaction(acno: any) {
    const data={
      acno
    }
    return this.http.post('http://localhost:3000/getTransaction',data,this.getOptions())

  }
deleteAcc(acno:any){
  return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())

}
}
// getTransaction(acno: any) {
//const data={
//acno
//}
//   return this.http.post('http://localhost:3000/withdraw', data,this.getOptions())
// }


