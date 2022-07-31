import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { 
	Auth,
	GoogleAuthProvider,
	FacebookAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut
} from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: Auth) { }

  signUpWithGoogle() {
	return signInWithPopup(this.fireAuth, new GoogleAuthProvider());
  }


  signUpWithFacebook() {
	return signInWithPopup(this.fireAuth, new FacebookAuthProvider());
  }

  login(form: NgForm) {
	return signInWithEmailAndPassword(this.fireAuth, form.value.email, form.value.password);
  }

  register(form: NgForm) {
	return createUserWithEmailAndPassword(this.fireAuth, form.value.email, form.value.password);
  }

  logout() {
	return signOut(this.fireAuth);
  }

}
