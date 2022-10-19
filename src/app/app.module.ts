import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DetailsComponent } from './details/details.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditprofileComponent } from './editprofile/editprofile.component';
import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    EditprofileComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    {provide: MAT_RADIO_DEFAULT_OPTIONS,  useValue: { color: 'accent' },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
