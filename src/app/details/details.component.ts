import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditprofileComponent } from '../editprofile/editprofile.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  getInfo: any = []
  name: string = ''
  domain: string=''
  gender: string =''
  date: any
  number : number = 0
  location: string = ''

  constructor(public dialog: MatDialog) {
      this.name = "John Smith",
      this.domain = "www.mjhot.com",
      this.gender = "Female",
      this.date = new Date(),
      this.number = 8654244514,
      this.location = "England"
   }

  ngOnInit(): void {
  }
  editProfile(): void {
    const dialogRef = this.dialog.open(EditprofileComponent, {
      width: '550px',
      data: 
      {
          name: this.name,
          domain: this.domain,
          gender: this.gender,
          date: this.date,
          number: this.number,
          location: this.location
      },
    });

    dialogRef.afterClosed().subscribe(result => {
     // console.log('The dialog was closed', result);
      this.name = result.name,
      this.domain = result.domain,
      this.gender = result.gender,
      this.date = result.date,
      this.number = result.number
      this.location = result.location
      //console.log("update Data", this.location)
    });
  }

}


