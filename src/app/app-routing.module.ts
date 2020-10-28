import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTopicComponent } from './add-topic/add-topic/add-topic.component';
import { ListTopicComponent } from './list-topic/list-topic/list-topic.component';

import { AddReplyComponent } from './components/add-reply/add-reply.component';

const routes: Routes = [
  { path: '', redirectTo: 'topics', pathMatch: 'full' },
  { path: 'add-topic', component: AddTopicComponent },
  { path: 'topics', component: ListTopicComponent },
  { path: 'add-reply', component: AddReplyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
