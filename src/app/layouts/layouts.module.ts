import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCompactComponent } from './layout-compact/layout-compact.component';

@NgModule({
  declarations: [
    LayoutCompactComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports:[
    LayoutCompactComponent,
  ]
})
export class LayoutsModule { }
