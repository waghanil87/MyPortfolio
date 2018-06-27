import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HomeComponent } from './component/home/home.component';

import { GalaxyBackgroundService } from './service/galaxy-background/galaxy-background.service';
import { TabsComponent } from './tabs/tabs.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ GalaxyBackgroundService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
