import { Component, OnInit } from "@angular/core";

import { subjectService } from '../_service/subject.service';

@Component({
    selector:'exmp-subj-sender',
    templateUrl: './sender.component.html',
    styleUrls:[]
})

export class SenderComponent implements OnInit{

    public message:string = 'Default';

    constructor(
        public _subjectService: subjectService
    ){}
    ngOnInit(){}

    /**
     * updateMessage
     */
    public sendMessage() {
        this._subjectService.setMessage(this.message);
    }
}