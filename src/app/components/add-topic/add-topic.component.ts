import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

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
        "msgid": "4f04da60-1e24-4d31-aa7b-1daf91c46341"
      },
      "request": {
        "cid": 3,
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
