import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from './menu.component';
import { CONST_ROUTING } from './app.routing';
import { BannerComponent } from './banner.component';
import { HomeserviceComponent } from './homeservice.component';
import { TeamComponent } from './team.component';
import { GallComponent } from './gall.component';
import { WelcomeComponent } from './welcome.component';
import { TestimonialComponent } from './testimonial.component';
import { SpecialisationComponent } from './specialisation.component';
import { MapComponent } from './map.component';
import { AddressformComponent } from './addressform.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    GalleryComponent,
    HelpComponent,
    MenuComponent,
    BannerComponent,
    HomeserviceComponent,
    TeamComponent,
    GallComponent,
    WelcomeComponent,
    TestimonialComponent,
    SpecialisationComponent,
    MapComponent,
    AddressformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
