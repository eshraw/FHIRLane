import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
  viewDate: Date = new Date();
  events = [];
  constructor() { }

  ngOnInit() {
  }

}