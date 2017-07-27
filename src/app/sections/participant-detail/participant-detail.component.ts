import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Participant } from '../../models/participant';
import 'rxjs/add/operator/map';
import { CommonModule } from '@angular/common';
import { ParticipantService } from '../participant.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './participant-detail.component.html',
    styleUrls: ['./participant-detail.component.scss']
})

export class ParticipantDetailComponent implements OnInit {
    participant = new Participant();
    constructor(private participantService: ParticipantService,
        private router: Router,
        private route: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) =>
                this.participantService.get(+params['id'])
            )
            .subscribe(participant => {
                this.participant = participant;
            });
    }
    update() {
        this.participantService.update(this.participant).subscribe(
            data => this.router.navigate(['/'])
        );
    }

    delete() {
        this.participantService.delete(this.participant).subscribe(
            data => this.router.navigate(['/'])
        );
    }
    back() {
        this.router.navigate(['/']);
    }
}
