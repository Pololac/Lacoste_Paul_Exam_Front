import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TarifComponent } from './pages/tarif/tarif.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tarifs', component: TarifComponent},
    { path: 'services', component: NotFoundComponent},
    { path: 'community', component: NotFoundComponent}
];
