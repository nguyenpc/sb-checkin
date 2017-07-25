import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Participant } from '../../../models/participant';
@Component({
    selector: 'participant-tile',    
    styleUrls: ['./participant-tile.component.scss'],
    template: `
        <div (click)="onSelectParticipant()" 
            class="participant" [ngClass]="{'checked-in': participant.status}">
            <p>{{participant.fullname}} </p>
            <p>Age: {{participant.age}}</p>
        </div>
    `
})
export class ParticipantTileComponent {
    @Input() participant: Participant;

    @Output('participantSelected') participantSelected$: EventEmitter<string>;

    constructor() {
        this.participantSelected$ = new EventEmitter<string>();
    }

    onSelectParticipant(): void {
        this.participantSelected$.emit(this.participant.fullname);
    }
 }
