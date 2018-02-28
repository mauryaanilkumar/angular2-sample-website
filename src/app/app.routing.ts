import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HelpComponent } from './help/help.component';
import { MenuComponent } from './menu.component';
const MAINMENU_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'help', component: HelpComponent },
    { path: 'contact', component: ContactComponent }  
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);