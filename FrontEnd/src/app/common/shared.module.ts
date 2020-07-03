import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenTextPipe } from './pipes/shorten-text.pipe';
import { HtmlToTextPipe } from './pipes/html-to-text.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NumberInputDirective } from './directives/positive-integer.directive';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';


@NgModule({
	declarations: [
		ShortenTextPipe,
		HtmlToTextPipe,
		NumberInputDirective
	],
	providers: [
		ShortenTextPipe,
		HtmlToTextPipe,
	],
	imports: [
		CommonModule,
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatRadioModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatCardModule,
		FormsModule
	],
	exports: [
		ShortenTextPipe,
		HtmlToTextPipe,
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatRadioModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatCardModule,
		FormsModule,
		NumberInputDirective
	]
})
export class SharedModule { }
