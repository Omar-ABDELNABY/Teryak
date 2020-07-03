export class JobApplication {
	name: string;
	age: number;
	degree: string;
	field: string;
	totalYearsOfExperience: number;
	hadExperienceInFoodSales: boolean;
	yearsOfExperienceInFoodSales: number;
	hadExperienceInHoneySales: boolean;
	yearsOfExperienceInHoneySales: number;
	phone: string;
	additinalInfo: string

	constructor(jobApplication: Partial<JobApplication>) {
		Object.assign(this, jobApplication);
	}
}