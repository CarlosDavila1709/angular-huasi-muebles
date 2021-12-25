import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  //path: '/dashboard' PagesRouting
  //path: '/auth' Authrouting
  //path: '/medicos MedicosRouting'
  //path: '/compras ComprasRouting'
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }