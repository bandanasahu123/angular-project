import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Services
import { ApiService } from './services/api.service';

//Componenets
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import { AddReplyComponent } from './components/add-reply/add-reply.component';
import { ListTopicsComponent } from './components/list-topics/list-topics.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTopicComponent,
    AddReplyComponent,
    ListTopicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
