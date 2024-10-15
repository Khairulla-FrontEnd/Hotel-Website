import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { EventsComponent } from './pages/events/events.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
        title:"Home",
    },
    {
        path:"home",
        component:HomeComponent,
        title:"Home",
    },
    {
        path:"rooms",
        component:RoomsComponent,
        title:"Rooms",
    },
    {
        path:"events",
        component:EventsComponent,
        title:"Events",
    },
    {
        path:"about",
        component:AboutComponent,
        title:"About",
    },
    {
        path:"contact",
        component:ContactComponent,
        title:"Contact",
    },
];
