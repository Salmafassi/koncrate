import { SlideService } from './services/slide.service';
import { MessageService } from './services/message.service';
import { PostService } from './services/post.service';
import { ServiceService } from './services/service.service';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';
//import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MessageComponent } from './components/message/message.component';
import { PostsComponent } from './components/posts/posts.component';
import { ServiceComponent } from './components/service/service.component';
import { ServicesComponent } from './components/services/services.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { ShowServiceComponent } from './components/show-service/show-service.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesPageComponent } from './services-page/services-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AboutComponent,
    BlogComponent,
    BreadcrumbComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
    MessageComponent,
    PostsComponent,
    ServiceComponent,
    ServicesComponent,
    ShowPostComponent,
    ShowServiceComponent,
    SlidersComponent,
    ServicesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule 
  ],
  providers: [
    ServiceService,
    PostService,
    MessageService,
    SlideService
  ],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
