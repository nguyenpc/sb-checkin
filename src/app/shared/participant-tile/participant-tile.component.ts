import { Component, Input } from '@angular/core';
import { Participant } from '../../models/participant';


@Component({
    selector: 'participant-tile',
    templateUrl: './participant-tile.component.html',
    styleUrls: ['./participant-tile.component.scss']
})

export class ParticipantTileComponent {
    @Input() participant: Participant;
 }
