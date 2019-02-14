import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {RollDicesComponent} from './roll-dices/roll-dices.component';
import {InitiativeTrackerComponent} from './initiative-tracker/initiative-tracker.component';
import {TableDisplayComponent} from './table-display/table-display.component';
import {TimeTrackerComponent} from './time-tracker/time-tracker.component';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatCardModule, MatSelectModule, MatButtonModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    RollDicesComponent,
    InitiativeTrackerComponent,
    TableDisplayComponent,
    TimeTrackerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
