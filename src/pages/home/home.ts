import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from "./../../providers/remote-service/remote-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  public event: any;
  public errorMessage: any;
  constructor(public navCtrl: NavController, 
              public remoteService : RemoteServiceProvider ) {
  }

  getData() {
    this.remoteService.getPosts()
      .subscribe(
        resp => this.event = resp,
        error => this.errorMessage = <any> error
      );
  }

  ngOnInit() {
    this.getData();
  }
}
