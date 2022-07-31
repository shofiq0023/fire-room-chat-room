import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Auth } from '@angular/fire/auth';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	faGoogle = faGoogle;
	faFacebook = faFacebook;
	errorMsg = '';
	loading = false;

	constructor(private authService: AuthService, private auth: Auth, private router: Router) { }

	ngOnInit(): void {
	}

	googleLogin() {
		this.errorMsg = '';
		this.authService
			.signUpWithGoogle()
			.then(() => console.log("logged in as: " + this.auth.currentUser?.displayName))
			.catch((err) => {
				console.log(err);
				this.errorMsg = 'There was an error';
			});
	}

	facebookLogin() {
		this.errorMsg = '';
		this.authService
			.signUpWithFacebook()
			.then(() => console.log("logged in as: " + this.auth.currentUser?.displayName))
			.catch((err) => {
				console.log(err);
				this.errorMsg = 'There was an error';
			});
	}

	onSubmit(form: NgForm) {
		this.errorMsg = '';
		this.loading = true;
		this.authService
			.login(form)
			.then(() => {
				this.router.navigate(['chat']);
			})
			.catch((err) => {
				console.log(err);
				this.errorMsg = "No user found!";
				this.loading = false;
			})
	}

}
