import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../delivery.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
})
export class StatusPage implements OnInit {

  data = [];
  recieved:any= [];
  indexvalue;
  bablu:any =[];
 


  constructor(private del: DeliveryService, private r: Router, private ar: ActivatedRoute) {
    

  }
   ngOnInit() {
    this.indexvalue = parseInt(this.ar.snapshot.paramMap.get('id'));
    console.log( "hellothis",this.indexvalue);
   this.recieved = this.del.getmyorder(this.indexvalue);
     console.log(this.recieved);

   

  }
  summary() {
    //this.r.navigateByUrl('/summary');
    this.r.navigate(['/summary',this.indexvalue]);
    console.log("full array", this.data);
    console.log("recieved array", this.recieved);
  }
  
  

}
