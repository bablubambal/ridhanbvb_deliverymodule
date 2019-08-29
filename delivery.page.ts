import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../delivery.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})

export class DeliveryPage implements OnInit{

  data = [];
   public arrayindex;

 received:any =[];

 setidvalue;
 len;
 
  
  constructor(private del:DeliveryService,public r:Router) {
    
    this.data = del.delivery_order;
    

  // this.received = del.getdata(this.value);
   
    //this.once = del.getid(this.idel);
    
    
   }
   ngOnInit(){
     this.len = this.del.getdatalen(this.data.length);
     this.r.navigate(['/choose',{queryParams:this.len}])
     console.log(this.len);
     
   }
   
   value;
   setid(x){
     this.value =x;
     console.log("x value is",x);
     this.del.getdata(x);
     this.received = this.del.getdata(x);
     this.r.navigate(['/status',x])

   }
   

  
    getdat(){
      //this.r.navigateByUrl('/status');
  
      // this.arrayindex = i;
    //   console.log(this.arrayindex);
      
     
   // console.log( "helllo",i);
    
     
    
    }
  }

 
  
  
  
  
 
 
 





