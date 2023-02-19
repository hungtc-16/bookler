import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutFullComponent } from './layout-full.component';
import { HomeComponent } from 'src/app/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutFullComponent,
    children: [
      // { path: 'home', loadChildren: () => HomeComponent , pathMatch: 'full'},
      { path: 'home', component: HomeComponent},
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutFullRoutingModule { }
