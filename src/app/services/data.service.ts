import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   //DATABASE
   db:any ={
    1000: {"acno":1000,"username":"Neer", "password":1000,"balance":5000,transaction:[]},
    1001: {"acno":1001,"username":"Lysha", "password":1001,"balance":5000,transaction:[]},
    1002: {"acno":1002,"username":"vypa", "password":1002,"balance":3000,transaction:[]}
  }

  currentUser:any

  constructor() { 
    this.getDetails()
  }

  //get deatils from local storage
getDetails()
{
  if(localStorage.getItem("database"))
  {
    this.db =JSON.parse(localStorage.getItem("database")||'')
  }
  if(localStorage.getItem("currentUser"))
  {
    this.currentUser =JSON.parse(localStorage.getItem("currentUser")||'')
  }
}

//save details
saveDetails()
{
  if(this.db)
  {
    localStorage.setItem("database",JSON.stringify(this.db))
  }
  if(this.currentUser)
  {
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))

  }
}

  //login
  login(acno:any,pswd:any)
  {
  
    let db=this.db
    if(acno in db)
    {
      if(pswd == db[acno]["password"])
      {
        this.currentUser = db[acno]["username"]
        this.saveDetails()
        return true
      }
      else{
        alert("Incorrect password")
        return false
      }
    }
    else{
      alert("user does not exist!!")
      return false
    }
  }

  //register
  register(username:any,acno:any,password:any)
  {
    let db=this.db

    if(acno in db)
    {
      this.saveDetails()

      return false
    }
    else{
      //insert in db
      db[acno] = {
        acno,
        username,
        password,
        "balance":0,
        transaction:[]
      }
      console.log(db)
      return true;
    }

  }
      //deposit
      deposit(acno:any,pswd:any,amt:any)
      {
        var amount=parseInt(amt)
        let db=this.db
        if(acno in db)
        {
          if(pswd == db[acno]["password"])
          {
            db[acno]["balance"]+=amount
            db[acno].transaction.push({
            type:"CREDIT",
            amount:amount
            })
            // console.log(db);
            this.saveDetails()

            return db[acno]["balance"]
          }
          else{
            alert("incorrect password")
            return false
          }
        }
        else{
          alert("user doesnot exist")
          return false
        }
      }
//withdraw
withdraw(acno:any,pswd:any,amt:any)
{
  var amount=parseInt(amt)
  let db=this.db
  if(acno in db)
  {
    if(pswd == db[acno]["password"])
    {
      if(db[acno]["balance"]>amount)
      {

      db[acno]["balance"]-=amount
      db[acno].transaction.push({
        type:"DEBIT",
        amount:amount
        })

      this.saveDetails()

      return db[acno]["balance"]
    }
    else{
      alert("insufficient balance")
      return false
    }
  }
  else{
    alert("Incorrect password")
    return false
  }
  alert("user doesnot exist")
  return false
}
}

}
