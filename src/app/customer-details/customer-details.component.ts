import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
customers:any [] = [
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
   activeTab = 1;
  CustomerId:any;	
  Filtervalue:any[];
  customerInfo:any;

  constructor( private route: ActivatedRoute,private router: Router,) { }

  ngOnInit(): void {

this.route.params.subscribe(params => {
    this.CustomerId = params.id;
 
  });

  this.Filtervalue = this.customers.filter((customer)=>{
          return this.CustomerId==customer.id;
  })

  if(this.Filtervalue.length > 0) {
    this.customerInfo = this.Filtervalue[0]
  }

	
  }






  close(){
   this.router.navigate(["/customer-list"]);
  }

switchTab(tabId) {
	
    this.activeTab = tabId;

  }


}