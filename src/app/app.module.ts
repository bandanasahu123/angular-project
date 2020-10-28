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

import { AddReplyComponent } from './components/add-reply/add-reply.component';

// import the feature module here so you can add it to the imports array below
import { AddTopicModule } from './add-topic/add-topic.module';
import { ListTopicModule } from './list-topic/list-topic.module';

@NgModule({
  declarations: [
    AppComponent,
    AddReplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, AddTopicModule, ListTopicModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
