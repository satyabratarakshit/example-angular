import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class subjectService{
    public message = new Subject<string>();
    
    /**
     * setMessage
     */
    public setMessage(msg:string) {
        this.message.next(msg);
    }
}