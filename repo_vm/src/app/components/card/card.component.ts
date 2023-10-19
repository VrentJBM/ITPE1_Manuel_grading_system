import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() course : string = "";
  @Input() courseTitle : string = "";
  @Input() description : string = "";
  @Input() totalStudents : string = "";
  @Input() courseImage : string = "";
  @Input() studentImage1 : string = "";
  @Input() studentImage2 : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
