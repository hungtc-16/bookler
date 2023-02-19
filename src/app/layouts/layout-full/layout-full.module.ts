import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutFullComponent } from './layout-full.component';
import { LayoutFullRoutingModule } from './layout-full-routing.module';
import { SiderBarComponent } from '../sider-bar/sider-bar.component';
import { HeaderComponent } from '../header/header.component';
import { NavigationComponent } from '../navigation/navigation.component';


@NgModule({
  declarations: [
    LayoutFullComponent,
    SiderBarComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    LayoutFullRoutingModule,
    CommonModule,
  ]
})
export class LayoutFullModule { }
