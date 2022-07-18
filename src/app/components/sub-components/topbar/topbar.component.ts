import { Component, OnInit } from '@angular/core';
import { faFire } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
	faFire = faFire;
  constructor() { }

  ngOnInit(): void {
  }

}
