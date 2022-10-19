import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
  name: string = ''
  domain: string=''
  gender: string =''
  date: string= ''
  number : number = 0
  location: string = ''
  constructor() { }

    getDetails(){
      console.log("service inject")
      // this.name = "Sushil Bachhav",
      // this.domain = "www.abc.com",
      // this.gender = "Male",
      // this.date = "date",
      // this.number = 985095248,
      // this.location = "Malegaon"
    }

}