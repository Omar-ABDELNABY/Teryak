import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JobApplication } from 'src/app/common/models/JobApplication';
import { FormGroup } from '@angular/forms';
import { JobApplicationService } from 'src/app/common/services/JobApplicationService';

@Component({
	selector: 'app-job-application',
	templateUrl: './job-application.component.html',
	styleUrls: ['./job-application.component.scss']
})
export class JobApplicationComponent implements OnInit {

	formActionUrl: string;
	isLoading = false;

	constructor(private jobApplicationService: JobApplicationService) {
		this.formActionUrl = `${environment.backendBaseUrl}jobapplications`;
	}

	ngOnInit() {
	}

	submit(form: FormGroup): void {
		this.isLoading = true;
		const jobApplication = new JobApplication(form.value);
		this.jobApplicationService.SendJobApplication(jobApplication)
			.subscribe(res => {
				this.isLoading = false;
				if (!res) {
					return;
				}
				console.log(res);
			})
	}

}
