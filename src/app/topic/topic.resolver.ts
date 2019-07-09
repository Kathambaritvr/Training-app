import { Injectable } from '@angular/core';
import { TopicService } from './topic.service';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Topic } from './topic';


@Injectable()
export class TopicResolver implements Resolve<any> {

    constructor(private topicService: TopicService) { }

    resolve(route: ActivatedRouteSnapshot) : Observable<Topic>{
        return this.topicService.getTopics(route.params['id']);
    }

}