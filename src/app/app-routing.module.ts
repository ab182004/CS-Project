import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpeningComponent } from './opening/opening.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputItemsComponent } from './input-items/input-items.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/opening', pathMatch: 'full'},
  { path: 'opening', component: OpeningComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'input-items', component: InputItemsComponent },
  { path: 'view-items', component: ViewItemsComponent },
  { path: 'settings', component: SettingsComponent},
  { path: '**', component: NoPageFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
