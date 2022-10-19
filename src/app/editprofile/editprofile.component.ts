import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';





export interface DialogData {
  name: string;
  domain: string,
  gender: string,
  date: string,
  number: number,
  location: string

}

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit{

  getInfo:any = []
  post: any = '';
  updateForm!: FormGroup;
  constructor(public dialogRef: MatDialogRef<EditprofileComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData){
    this.getInfo = this.data;
  }
  
 

  ngOnInit(): void{
    this.updateForm = new FormGroup({
      name: new FormControl( this.getInfo.name, Validators.required),
      domain: new FormControl(this.getInfo.domain),
      gender: new FormControl(this.getInfo.gender),
      date: new FormControl(this.getInfo.date),
      number: new FormControl(this.getInfo.number,  {
        validators: [Validators.minLength(10), Validators.maxLength(10)]
      }),
      location: new FormControl(this.getInfo.location)
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
