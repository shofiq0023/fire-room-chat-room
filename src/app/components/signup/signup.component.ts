import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	faLeft = faArrowLeft;
  constructor() { }

  ngOnInit(): void {
  }

	onSubmit(form: NgForm) {
		console.log(form.value);
	}

}
