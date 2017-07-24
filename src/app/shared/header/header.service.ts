import { Http, Response } from '@angular/http';
import { Participant } from 'app/models/participant';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderService {
    private stats = new Subject<any>();
    onStatsChanged$ = this.stats.asObservable();
    statsChange(data: any) {
        this.stats.next(data);
    }
}
