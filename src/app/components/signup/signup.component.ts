import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	password?: string;
	conPass?: string;
	loading = false;
	errorMsg = '';

	faGoogle = faGoogle;
	faFacebook = faFacebook;

	faLeft = faArrowLeft;
  	constructor(private authService: AuthService, private router: Router) { }

  	ngOnInit(): void {
  	}

	onSubmit(form: NgForm) {
		console.log(form.value);
		this.loading = true;
		this.errorMsg = '';

		this.authService.register(form).then(() => {
			this.loading = false;
			form.reset();
			this.router.navigate(['chat']);
		}).catch((err) => {
			this.errorMsg = "There was an error";
			console.log(err);
			this.loading = false;
		});
		
	}

	googleSignup() {
		this.errorMsg = '';
		this.authService.signUpWithGoogle().then(() => {
			console.log("google signed up");
		}).catch((err) => {
			console.log(err);
		});
	}

	facebookSignup() {
		this.errorMsg = '';
		this.authService.signUpWithFacebook().then(() => {
			console.log("facebook signed up");
		}).catch((err) => {
			console.log(err);
			this.errorMsg = "Same email was used to ceate another account!"
		});
	}
}
