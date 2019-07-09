import { Component, OnInit, Input, OnDestroy, ChangeDetectorRef, NgZone, OnChanges, ViewEncapsulation } from '@angular/core';
import { TopicService } from './topic.service';
import { Topic } from './topic';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { HighlightResult } from 'ngx-highlightjs';
import { Program } from './model/program';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],

})
export class TopicComponent implements OnInit {
  @Input()
  videoUrl = '';
  response: HighlightResult;
  topic: Topic;
  show: boolean = false;
  subscribtion: Subscription;
  selectedIndex = 0;
  showPlaylist: boolean = true;
  iframeWidth = 520;
  code = '';
  programName='';
  
  constructor(private topicService: TopicService,
    private router: Router,
    private route: ActivatedRoute,
    private change: ChangeDetectorRef,
    private zone: NgZone) {

    topicService.videoAnnounced$.subscribe(
      videoUrl => {
        this.loadVideos(videoUrl);
      });

    topicService.programAnnounced$.subscribe(
      program => {
        this.showProgram(program);
        this.setProgramTab();
      });  



   this.subscribtion = this.router.events.subscribe((event: NavigationStart) => {
      if (this.route.snapshot.data['topic'] !== undefined) {
        this.topic = this.route.snapshot.data['topic'];
        console.log('topic:'+JSON.stringify(this.topic));
        this.selectedIndex = 0;
        this.topicService.announceTopic(this.topic);
      }
    });
  }

  ngOnInit() {
    this.topic = this.route.snapshot.data['topic'];
  }

  showVideo(url: string) {
    this.videoUrl = url;
  }

  addFiles() {

  }

  openUploadDialog() {

  }

  loadVideos(url: string) {
    console.log('video url:'+url);
    this.videoUrl = url;
    window.setTimeout(() => {
      this.showPlaylist = false;
      this.iframeWidth = 800;

      this.zone.run(() => {
        console.log('cunnrrent:' + this.selectedIndex)
        this.selectedIndex = 2;
        this.change.detectChanges();
      });
    });
  }

  setProgramTab() {
    window.setTimeout(() => {
      this.zone.run(() => {
        console.log('cunnrrent:' + this.selectedIndex)
        this.selectedIndex = 1;
        this.change.detectChanges();
      });
    });
  }

  onLinkClick(event: MatTabChangeEvent) {
    this.selectedIndex = event.index;
    if (this.selectedIndex != 2) {
      this.showPlaylist = true;
      this.iframeWidth = 520;
      this.videoUrl = '';
    }
  }

  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }

  showProgram(program:Program){
    console.log('nam:'+name);
    this.topicService.getFile(program.url).subscribe(data => {
      console.log('da:'+data);
      this.programName = program.name;
      this.code = data;
    });;
  }
  
  getVideoIndex(id:string){

    return this.topicService.getVideoIndex(this.topic,id);
  }

  getProgramIndex(id:string){
    return this.topicService.getProgramIndex(this.topic,id);
  }

  getDocumentIndex(id:string){
    return this.topicService.getDocumentIndex(this.topic,id);
  }

  getSiteIndex(id:string){
    return this.topicService.getSiteIndex(this.topic,id);
  }
}
