import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DeliveryService } from '../delivery.service';
import { PickService } from '../pick.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.page.html',
  styleUrls: ['./choose.page.scss'],
})
export class ChoosePage implements OnInit {
 
  pick;
  len;
  deli;

  constructor(private r:Router,private del:DeliveryService,private pic:PickService,public ar:ActivatedRoute) {
    
    
   
   }
  

  ngOnInit() {
    this.ar.queryParamMap.subscribe((res)=>
    {console.log(res);});
    this.deli =this.del.delivery_order.length;
  
    this.pick = this.pic.pickup_orders.length;
  }
  pickup(){
    this.r.navigateByUrl('/pickup');
  }
  delivery(){
    this.r.navigateByUrl('/delivery');
  }

}
