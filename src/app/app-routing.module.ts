import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReplyComponent } from './components/add-reply/add-reply.component';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import { ListTopicsComponent } from './components/list-topics/list-topics.component';

const routes: Routes = [
  { path: '', redirectTo: 'topics', pathMatch: 'full' },
  { path: 'add-topic', component: AddTopicComponent },
  { path: 'topics', component: ListTopicsComponent },
  { path: 'add-reply', component: AddReplyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
