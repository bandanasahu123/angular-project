import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-list-topics',
  templateUrl: './list-topics.component.html',
  styleUrls: ['./list-topics.component.css']
})
export class ListTopicsComponent implements OnInit {

  topics: any
  topicList: any

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getTopicsList();
  }

  // Get student list from services
  getTopicsList() {
    const topicList = this.apiService.getAllTopics();
    topicList.subscribe(data => {
      this.topics = data.topics;
      console.log('-----------------------', data)
    }, error => {
      console.log(error)
    })
  }

  

}
