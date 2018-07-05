import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the GroupIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-id',
  templateUrl: 'group-id.html',
})
export class GroupIdPage {

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
      this.link="http://sajjel.info/api/c3.php?firstname="+this.name  ;
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
