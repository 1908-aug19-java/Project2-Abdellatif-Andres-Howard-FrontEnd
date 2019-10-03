import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './main/profile/profile.component';
import { PokemonsComponent } from './main/pokemons/pokemons.component';
import { LogOutComponent } from './main/log-out/log-out.component';
import { CatchEmAllComponent } from './main/catch-em-all/catch-em-all.component';
import { TestsComponent } from './main/tests/tests.component';
import { ItemsComponent } from './main/items/items.component';
import { GGuard } from './services/g.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';


const routes: Routes = [
  {path: "",pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "profile", component: ProfileComponent, canActivate: [GGuard] },
  {path: "pokemons", component: PokemonsComponent, canActivate: [GGuard]},
  {path: "catch-em-all",component: CatchEmAllComponent, canActivate: [GGuard]},
  {path: "log-out", component: LogOutComponent, canActivate: [GGuard]}, 
  {path: "tests", component: TestsComponent, canActivate: [GGuard]},
  {path: "items", component: ItemsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
