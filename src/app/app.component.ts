import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sunbird-angular';

  cid: any;
  authToken: any;

  ngOnInit() {
    this.cid = '3';
    this.authToken = '4f04da60-1e24-4d31-aa7b-1daf91c46341';
  }

}
