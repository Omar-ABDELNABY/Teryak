import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JobApplication } from '../models/JobApplication';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
	providedIn: 'root'
})
export class JobApplicationService {

	private backendBaseUrl: string = environment.backendBaseUrl;

	constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

	SendJobApplication(body: JobApplication) {
		return this.http.post(this.backendBaseUrl + 'jobapplications', body)
			.pipe(
				catchError((error) => {
					return this.handleError(error);
				})
			);
	}

	handleError(error) {
		// wiered behavior: inputs switched in arabic here!
		this.snackBar.open('', 'حدث خطأ ما! برجاء المحاوله لاحقا', {
			duration: 3000
		});
		return of(null);
	}

}