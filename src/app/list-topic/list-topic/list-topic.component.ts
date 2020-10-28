// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-list-topic',
//   templateUrl: './list-topic.component.html',
//   styleUrls: ['./list-topic.component.css']
// })
// export class ListTopicComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-list-topic',
  templateUrl: './list-topic.component.html',
  styleUrls: ['./list-topic.component.css']
})
export class ListTopicComponent implements OnInit {

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

