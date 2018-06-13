import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
	{
		path: 'welcome',
		component: WelcomeComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{ 
		path: '**',
		component: WelcomeComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
