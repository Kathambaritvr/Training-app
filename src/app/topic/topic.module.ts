import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';
import { TopicResolver } from './topic.resolver';
import { CommonMaterialModule } from '../shared/common-material/common-material.module';
import { SharedModule } from '../shared/shared.module';
import { UploadModule } from '../shared/upload/upload.module';
import { MentorComponent } from './mentor/mentor.component'; 
import { HighlightModule } from 'ngx-highlightjs';
import { DialogDataExampleDialog } from './mentor/dialog-data-example.dialog';



@NgModule({
  declarations: [ TopicComponent, MentorComponent , DialogDataExampleDialog],
  imports: [
    CommonModule,
    SharedModule,
    TopicRoutingModule,
    CommonMaterialModule,
    UploadModule,
    HighlightModule
    
  ],
  providers: [TopicResolver],
  entryComponents: [DialogDataExampleDialog]
})
export class TopicModule {
 
 }
 