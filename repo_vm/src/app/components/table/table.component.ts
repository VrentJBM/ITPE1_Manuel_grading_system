import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() course : string = "";
  @Input() section : string = "";
  @Input() row1StudentImage : string = "";
  @Input() row1Name : string = "";
  @Input() row1Email : string = "";
  @Input() row1ID : string = "";
  @Input() row1Grades : string = "";
  @Input() row2StudentImage : string = "";
  @Input() row2Name : string = "";
  @Input() row2Email : string = "";
  @Input() row2ID : string = "";
  @Input() row2Grades : string = "";
  @Input() row3StudentImage : string = "";
  @Input() row3Name : string = "";
  @Input() row3Email : string = "";
  @Input() row3ID : string = "";
  @Input() row3Grades : string = "";
  @Input() row4StudentImage : string = "";
  @Input() row4Name : string = "";
  @Input() row4Email : string = "";
  @Input() row4ID : string = "";
  @Input() row4Grades : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
