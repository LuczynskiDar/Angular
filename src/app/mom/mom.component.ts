import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mom',
  templateUrl: './mom.component.html',
  styleUrls: ['./mom.component.css']
})
export class MomComponent implements OnInit {

  constructor() { }


  @Input()
  childsProperty = '';

  ngOnInit() {
  }

}
