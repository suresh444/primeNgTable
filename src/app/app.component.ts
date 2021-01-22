import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {UserDataService} from './user-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'primeNgTable';
  userDetails:[];
  cols: any[];
  totalRecords: number;

  constructor(private userData:UserDataService){}
  ngOnInit(){
    this.userData.getData().subscribe((res:any)=>{
      this.userDetails=res.data
      console.log(this.userDetails)
    });

    this.cols = [
      { field: 'Name', header: 'Name' },
      {field: 'Age', header: 'Age' },
      { field: 'EmailId', header: 'Email Id' }      
  ];

  this.totalRecords=this.cols.length;
  }
}
