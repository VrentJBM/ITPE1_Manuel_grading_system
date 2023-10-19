import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ScreenComponent } from './screen/screen.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component';
import { TeacherCardComponent } from './teacher-card/teacher-card.component';



@NgModule({
  declarations: [
    CardComponent,
    TableComponent,
    ButtonComponent,
    TeacherCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    TableComponent,
    ButtonComponent,
    TeacherCardComponent
  ]
})
export class ComponentsModule { }
