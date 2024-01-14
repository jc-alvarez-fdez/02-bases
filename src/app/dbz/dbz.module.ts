import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    mainPageComponent,
  ],
  exports: [
    mainPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }