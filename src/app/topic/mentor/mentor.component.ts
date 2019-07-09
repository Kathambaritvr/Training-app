import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ThemePalette, MatDialog } from '@angular/material';

import {
  MatCarouselSlideComponent,
  Orientation
} from '@ngmodule/material-carousel';
import { TopicService } from '../topic.service';
import { Topic } from '../topic';
import { Program } from '../model/program';
import { DialogDataExampleDialog } from './dialog-data-example.dialog';
import { Slide } from '../slide';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent {


  //public slidesList = ['Slide1.PNG',
  //  'Slide2.PNG'
  //];

  public timings = '250ms ease-in';
  public autoplay = false;
  public interval = 50000;
  public loop = false;
  public hideArrows = true;
  public hideIndicators = false;
  public color: ThemePalette = 'accent';
  public maxWidth = 'auto';
  public proportion = 50;
  //public slides = this.slidesList.length;
  public overlayColor = '#00000040';
  public hideOverlay = true;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';

  @ViewChildren(MatCarouselSlideComponent) public carouselSlides: QueryList<
    MatCarouselSlideComponent
  >;
  public darkMode = false;

  topic: Topic;
  height: number;

  constructor(
    private overlayContainer: OverlayContainer,
    private elementRef: ElementRef<HTMLElement>,
    private topicService: TopicService,
    public dialog: MatDialog
  ) {
    topicService.topicAnnounced$.subscribe(
    (topic : Topic) => {
        this.topic = topic;
      });
  }
  getHeight(desc: any, slide:any) {
    length = 0;
    if (desc !== undefined) {

      if (slide.playlist !== undefined && slide.playlist!==null && slide.playlist!=='') {
        length += slide.playlist.length * 40;
      }
      if (slide.program !== undefined && slide.program !== null && slide.program!=='') {
        length += slide.program.length * 40;
      }
      length = length + (desc.length > 100 ? desc.length : 100);
    }
    return length;
  }

  getStudentDescHeight(desc:string){
    return desc.length > 100 ? desc.length : 100;
  }

  public resetSlides(): void {
    this.carouselSlides.forEach(item => (item.disabled = false));
  }

  loadVideos(videoUrl: string) {
    console.log('load vide:' + videoUrl)
    this.topicService.announceVideo(videoUrl);
  }

  loadProgram(program: Program) {
    console.log('load pgm:' + program)
    this.topicService.announceProgram(program);
  }

  getVideoIndex(id:string){
    return this.topicService.getVideoIndex(this.topic,id);
  }

  getProgramIndex(id:string){
    return this.topicService.getProgramIndex(this.topic,id);
  }

  getSiteIndex(id:string){
    return this.topicService.getSiteIndex(this.topic,id);
  }

  openDialog(slide:Slide) {
    console.log(slide.img);
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        "slide": slide
      },
      position: {
        top: '100px',
        right: '40px'
      }
    });
  }

}