import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputItemsComponent } from './input-items/input-items.component';
import { ViewItemsComponent } from './view-items/view-items.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { SettingsComponent } from './settings/settings.component';
import { ItemComponent } from './input-items/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InputItemsComponent,
    ViewItemsComponent,
    NoPageFoundComponent,
    SettingsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
