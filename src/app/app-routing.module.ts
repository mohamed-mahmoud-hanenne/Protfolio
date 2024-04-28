import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';

const routes: Routes = [
  {path:'' , redirectTo:'/home', pathMatch:'full'},
  {path:'about',component:AboutComponent,title:'About Me'},
  {path:'home',component:HomeComponent,title:'Home'},
  {path:'projects',component:ProjectsComponent,title:'Projects'},
  {path:'contact',component:ContactComponent,title:'Contact'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
