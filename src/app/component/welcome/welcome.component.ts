import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  	constructor(private router: Router){
	}

	goHome() {
		console.log('sdfljsldfjs');
	    this.router.navigate(['home']); 
	}
 	getRandomColor() {
  		let letters = '0123456789ABCDEF';
  		let color = '#';
  		for (let i = 0; i < 6; i++) {
    		color += letters[Math.floor(Math.random() * 16)];
  		}
  		return color;
	}
    ngOnInit() {
	  	let w = window.innerWidth;
	    let h =window.innerHeight;

	    for (let i=0; i<200; i++){
		    let div = document.createElement("div");
		    div.style.background = this.getRandomColor().toString();
		    div.style.top =Math.round(Math.random() * h-10) + "px";
		    div.style.left =Math.round(Math.random() * w-10) + "px";
		    document.getElementById("wrapper").appendChild(div);
	    }
	    // make some waves.
		let ocean = document.getElementById("ocean"),
	    waveWidth = 10,
	    waveCount = Math.floor(window.innerWidth/waveWidth) +1,
	    docFrag = document.createDocumentFragment();

		for(let i = 0; i < waveCount; i++){
		  	let wave = document.createElement("div");
		  	wave.className += " wave";
		  	docFrag.appendChild(wave);
		  	wave.style.left = i * waveWidth + "px";
		  	wave.style.webkitAnimationDelay = (i/100) + "s";
		}
		ocean.appendChild(docFrag);
    }
}

