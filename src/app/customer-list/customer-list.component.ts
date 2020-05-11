import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { NgModule } from  '@angular/core';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

customers = [
    {
	    id:1,
	    name: 'Peter Dinklage',
	   	company_name:'Tcs',
	   	email:'peterD@outlook.com',
	   	work_phone:'9012345697',
	   	sales_info:'Sales info for Peter Dinklage'
    },
    {
    	id:2,
    	name: 'Sean Bean',
   		company_name:'Infosys',
	   	email:'SeanB@outlook.com',
	   	work_phone:'9912345697',
	   	sales_info:'Sales info for Sean Bean'
    },
    {
    	id:3,
    	name: 'Emilia Clark',
    	company_name:'Infosys',
	   	email:'Emiliac@outlook.com',
	   	work_phone:'9012347890',
	   	sales_info:'Sales info for Emiliac Clark'
    },
    {
    	id:4,
    	name: 'Catelyn Stark',
   		company_name:'Tcs',
	   	email:'CatelynS@outlook.com',
	   	work_phone:'9956126534',
	   	sales_info:'Sales info for Catelyn Stark'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
