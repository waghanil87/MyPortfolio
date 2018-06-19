import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { GalaxyBackgroundService } from '../../service/galaxy-background/galaxy-background.service'


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  	constructor(private router: Router, private _bgservice: GalaxyBackgroundService){
  		this.router = router;
	}

	goHome() {
	    this.router.navigate(['home']); 
	}
 	
    ngOnInit() {
    	this._bgservice.createGalaxy();
    }
}

