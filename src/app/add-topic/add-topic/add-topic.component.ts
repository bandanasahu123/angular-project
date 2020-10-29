// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-add-topic',
//   templateUrl: './add-topic.component.html',
//   styleUrls: ['./add-topic.component.css']
// })
// export class AddTopicComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  @Input() cid: any;
  @Input() authToken: any;

  topicAddForm: FormGroup
  topic = {
    title: '',
    content: '',
  }

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.topicAddForm = new FormGroup({
      'title': new FormControl(null),
      'content': new FormControl(null)
    });
  }

  saveTopic() {

    console.log('----------FormControl', this.topicAddForm)
    let data = {
      "params": {
        "msgid": this.authToken
      },
      "request": {
        "cid": this.cid,
        "title": this.topicAddForm.value.title,
        "content": this.topicAddForm.value.content
      }
    }

    this.apiService.createTopic(data).subscribe(response => {
      console.log('-------response ------', response)
      this.router.navigate(['/']);
    }, error => {
      console.log(error)
    })
  }

}

