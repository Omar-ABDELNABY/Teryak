import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../common/shared.module';
import { JobApplicationComponent } from './job-application/job-application.component';
import { JobApplicationSuccessComponent } from './job-application-success/job-application-success.component';

const routes: Routes = [
	{ path: 'jobapplication', component: JobApplicationComponent },
	{ path: 'jobapplication/success', component: JobApplicationSuccessComponent }
];

@NgModule({
	declarations: [
		MainComponent,
		JobApplicationComponent,
		JobApplicationSuccessComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		SharedModule,

		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatToolbarModule,
		MatIconModule,
		FlexLayoutModule,
		MatMenuModule,
		CarouselModule,
		WavesModule,
		HttpClientModule,
	],
	providers: [
	],
})
export class MainModule { }
