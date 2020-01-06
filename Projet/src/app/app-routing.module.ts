import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent} from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { MenuComponent} from './menu/menu.component';



const routes: Routes = [  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                        { path: 'dashboard', component: AccueilComponent },
                        { path: 'menu', component: MenuComponent },
                        { path: 'inscription', component: InscriptionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
