import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  birthday:number = new Date().getFullYear() - 1998
  constructor() { }

  ngOnInit(): void {
  }

}
