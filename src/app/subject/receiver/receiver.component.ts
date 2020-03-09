import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { subjectService } from '../_service/subject.service';

@Component({
    selector: 'exmp-subj-receiver',
    templateUrl:'./receiver.component.html'
})

export class ReceiverComponent implements OnInit, OnDestroy{

    public subscribedMessage:string = 'Default';
    public subscribeService: Subscription;

    constructor(
        private _subjectService: subjectService
    ){}
    ngOnInit(){
        this.subscribeService = this._subjectService.message.subscribe(
            (resp)=>{
                this.subscribedMessage = resp;
            }
        );
    }

    ngOnDestroy(){
        this.subscribeService.unsubscribe();
    }
}