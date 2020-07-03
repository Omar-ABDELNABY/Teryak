import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JobApplication } from 'src/app/common/models/JobApplication';
import { FormGroup, NgForm } from '@angular/forms';
import { JobApplicationService } from 'src/app/common/services/job-application.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-job-application',
	templateUrl: './job-application.component.html',
	styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent implements OnInit {

	formActionUrl: string;
	isLoading = false;

	constructor(private jobApplicationService: JobApplicationService, private router: Router) {
		this.formActionUrl = `${environment.backendBaseUrl}jobapplications`;
	}

	ngOnInit() {
	}

	submit(form: NgForm): void {
		this.isLoading = true;
		const jobApplication = new JobApplication(form.value);
		this.jobApplicationService.SendJobApplication(jobApplication)
			.subscribe(res => {
				this.isLoading = false;
				if (!res) {
					return;
				}
				this.router.navigate(['jobapplication/success']);
			})
	}

}
