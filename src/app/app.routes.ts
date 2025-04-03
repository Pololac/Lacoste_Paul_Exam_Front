import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TarifComponent } from './pages/tarif/tarif.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tarifs', component: TarifComponent}
];
