import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teacher-card',
  templateUrl: './teacher-card.component.html',
  styleUrls: ['./teacher-card.component.scss']
})
export class TeacherCardComponent implements OnInit {

  @Input() name : string = "";
  @Input() course : string = "";
  @Input() description : string = "";
  @Input() imageTeacher : string = "";
  @Input() section1 : string = "";
  @Input() section2 : string = "";
  @Input() section3 : string = "";
  @Input() section4 : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
