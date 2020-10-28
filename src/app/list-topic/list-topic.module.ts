import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTopicComponent } from './list-topic/list-topic.component';



@NgModule({
  declarations: [ListTopicComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListTopicComponent
  ]
})
export class ListTopicModule { }
