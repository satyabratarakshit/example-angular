import { OnInit, Component, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
    selector: 'exp-observable',
    templateUrl: './obs-sub.component.html',
    styleUrls: ['./obs-sub.component.css']
})

export class ObsSubComponent implements OnInit, OnDestroy {

    public countSubscription: Subscription[] = [];

    constructor() { }

    ngOnInit() {
        const customIntervalObservable = Observable.create(observer => {
            let count = 0;
            setInterval(() => {
                observer.next(count);
                count++;
                // if (count == 5) {
                //     observer.error(new Error("error Occured!!"))
                // }
                if (count == 8) {
                    observer.complete();
                }
            }, 1000);
        });

        this.countSubscription.push(
            customIntervalObservable.subscribe({
                next(resp) { console.log(resp); },
                error(error) { console.log(error.message) },
                complete() { console.log('funished Count') }
            })
        );
    }

    ngOnDestroy() {
        this.countSubscription.map(subscribed => subscribed.unsubscribe());
    }
}