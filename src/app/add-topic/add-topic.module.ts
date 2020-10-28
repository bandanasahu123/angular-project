import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddTopicComponent],
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddTopicComponent
  ]
})
export class AddTopicModule { }
