import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../delivery.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  indexvalue;
  recieved:any =[];

  constructor(private del:DeliveryService,private r:Router,private ar:ActivatedRoute) {
   

   }
   
   delete(){
    console.log();
   this.del.delivery_order.splice(this.indexvalue,1);
   alert("the value index is "+this.indexvalue+"is deleted");
   this.r.navigateByUrl('/choose');
   
 }

   
  ngOnInit() {
    this.indexvalue = parseInt(this.ar.snapshot.paramMap.get('id'));
    console.log( "hellothis",this.indexvalue);
   this.recieved = this.del.getmyorder(this.indexvalue);
     console.log(this.recieved);

  }

}