import { Component } from '@angular/core';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    numberOfParticipant = 0;
    numberOfCheckedInParticipant = 0;
    constructor(private headerService: HeaderService, private router: Router) {
        this.headerService.onStatsChanged$.subscribe(
            (stats) => {
                this.numberOfParticipant = stats.numberOfParticipant;
                this.numberOfCheckedInParticipant = stats.numberOfCheckedInParticipant;
            }
        );
    }
    navigateHome() {
        this.router.navigate(['/']);
    }
}
