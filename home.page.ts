import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private r:Router) {
    

}
username:any;
password:any;
choose(){

  console.log("funtion working");
  this.r.navigateByUrl('/choose');
}
}
