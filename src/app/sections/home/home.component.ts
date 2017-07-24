import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Participant } from '../../models/participant';
import 'rxjs/add/operator/map';
import { CommonModule } from '@angular/common';
import { ParticipantService } from '../participant.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../shell/header/header.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    listParticipant: Array<Participant>;
    constructor(private participantService: ParticipantService, private router: Router, private headerService: HeaderService) {

    }
    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.participantService.getList().subscribe(
            (data) => {
                this.listParticipant = data;
                const numberOfCheckedInParticipant = data.filter(x => x.status).length;
                this.headerService.statsChange({
                    numberOfParticipant: data.length,
                    numberOfCheckedInParticipant: numberOfCheckedInParticipant
                });
            }
        );
    }

    register() {
        this.router.navigate(['register']);
    }
}
