import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items : Array<Object>;
  link : string ;
  name:string ="" ;
  mobile:string="" ;
  groupid:string="" ;
  show_err : boolean = false ;

  constructor(public navCtrl: NavController,private http: HttpClient) {

  }

search()
{
  if(this.name=="")
  {
    this.show_err=true
  }
  else{
    this.show_err=false ;
    this.link="http://sajjel.info/api/c1.php?firstname="+this.name  ;
    if(this.mobile!="")
    {
      this.link = this.link + "&mobile="+ this.mobile ;
    }
    if(this.groupid!="")
    {
      this.link = this.link + "&groupid="+ this.groupid ;
    }

    this.http.get(this.link)
      .subscribe((data : any) => {
        this.items=data ;
        console.log(JSON.stringify(data)) ;

      }),(error => {


      console.log(error.error); // error message as string

    });


  }



}


}
