import { Injectable } from '@angular/core';
import { Topic } from './topic';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { APIConstants } from '../shared/model/api-constants';
import { Program } from './model/program';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private videoSubject = new Subject<string>();
  private topicSubject = new Subject<Topic>();
  private programSubject = new Subject<Program>();

  videoAnnounced$ = this.videoSubject.asObservable();
  topicAnnounced$ = this.topicSubject.asObservable();
  programAnnounced$ = this.programSubject.asObservable();

  constructor(private http: HttpClient) { }

  getTopics(id:string){
    return this.http.get<Topic>(APIConstants.topicsUrl+id);
  };

  announceVideo(videoUrl: string) {
    this.videoSubject.next(videoUrl);
  }

  announceProgram(program: Program) {
    this.programSubject.next(program);
  }

  announceTopic(topic:Topic){
    this.topicSubject.next(topic);
  }

  getFile(url:string){
    return this.http.get(url, { responseType: 'text' });
  }

   //TODO repetitive
   getVideoIndex(topic:Topic,id:string){
     console.log("topic.palylist:"+JSON.stringify(topic));
    return this.getIndex(topic.playlists,id);
  }

  getProgramIndex(topic:Topic,id:string){
    return this.getIndex(topic.programs,id);
  }

  getSiteIndex(topic:Topic,id:string){
    return this.getIndex(topic.sites,id);
  }

  getDocumentIndex(topic:Topic,id:string){
    return this.getIndex(topic.documents,id);
  }

  getIndex(contents:any,id:string){
    var count = -1;
    console.log("id:"+id);
    console.log("contents:"+JSON.stringify(contents));
    for (let content of contents) {
      console.log('content id:'+content.id)
      console.log('equal:'+ (content.id === Number(id)));
      if(content.id === Number(id)){
        
        count++;
        console.log('countnnt:'+count);
        return count;
      }
      count++;
     }
     return count;
  }


}
