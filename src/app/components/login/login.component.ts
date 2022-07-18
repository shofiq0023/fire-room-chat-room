import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Auth } from '@angular/fire/auth';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	faGoogle = faGoogle;
	faFacebook = faFacebook;
  constructor(private authService: AuthService, private auth: Auth) { }

  ngOnInit(): void {
  }

  googleLogin() {
	this.authService
		.loginWithGoogle()
		.then(() => console.log("logged in as: " + this.auth.currentUser?.displayName))
		.catch((err) => console.log(err.message));
  }

  facebookLogin() {
	this.authService
		.loginWithFacebook()
		.then(() => console.log("logged in as: " + this.auth.currentUser?.displayName))
		.catch((err) => console.log(err.message));
  }

}
