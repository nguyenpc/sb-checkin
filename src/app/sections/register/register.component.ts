import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Participant } from '../../models/participant';
import 'rxjs/add/operator/map';
import { CommonModule } from '@angular/common';
import { ParticipantService } from '../participant.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    participant = new Participant();
    constructor(private participantService: ParticipantService, private router: Router) {

    }
    ngOnInit(): void {

    }
    back() {
        this.router.navigate(['/']);
    }
    register() {
        this.participantService.add(this.participant).subscribe(
            data => this.router.navigate(['/'])
        );
    }

}
