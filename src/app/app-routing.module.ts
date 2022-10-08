import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { ShowServiceComponent } from './components/show-service/show-service.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  {path:'',component: AccueilComponent},
   {path:'blog',component: BlogComponent},
   {path:'blog/:slug',component: ShowPostComponent},
   {path:'service',component: ServicesPageComponent},
   {path:'services/:slug',component: ShowServiceComponent},
   {path:'about',component:AboutComponent},
   {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
