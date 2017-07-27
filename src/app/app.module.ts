import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app.routing';
import { HomeComponent } from './sections/home/home.component';
import { HeaderComponent } from './shell/header/header.component';
import { CommonModule } from '@angular/common';
import { ParticipantService } from './sections/participant.service';
import { ParticipantTileComponent } from './sections/home/participant-tile/participant-tile.component';
import { RegisterComponent } from './sections/register/register.component';
import { ParticipantDetailComponent } from './sections/participant-detail/participant-detail.component';
import { HeaderService } from './shell/header/header.service';
import { tileHighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ParticipantTileComponent,
    RegisterComponent,
    ParticipantDetailComponent,
    tileHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [ParticipantService, HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
