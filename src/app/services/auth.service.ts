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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: Auth) { }

  loginWithGoogle() {
	return signInWithPopup(this.fireAuth, new GoogleAuthProvider());
  }

  loginWithFacebook() {
	return signInWithPopup(this.fireAuth, new FacebookAuthProvider());
  }

  logout() {
	return signOut(this.fireAuth);
  }

}
