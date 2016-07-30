import { Directive, ElementRef, HostListener, Input } from 'angular2/core';
import { Injectable } from 'angular2/core';
import { HeroService } from './hero.services';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
	private el: HTMLElement;
	numberOfClicks = 0;

	constructor(el: ElementRef,private heroService: HeroService) { this.el = el.nativeElement; }

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('yellow');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}

	@HostListener('click', ['$event.target'])onClick(btn) {
	      console.log("button", btn, "number of clicks:", this.numberOfClicks++);
		  var $elem = $(btn);
		  if($elem.html() == "unComplete")
		  {
		  	$elem.html("Complete");
		  }
		  else
		  {
		  	$elem.html("unComplete");
		  }
		  this.getMethod();
		  this.postMethod();
	}

	private highlight(color: string) {
		this.el.style.backgroundColor = color;
	}

	postMethod() {
		console.log("post Heros");
		this.heroService.postMethod().subscribe(
			suc => {console.log("post suc"); console.log(suc)}, 
			err => console.log("post err"), 
			fin => console.log("post fin")
		);
	}

	getMethod() {
		console.log("get Heros");
		this.heroService.getMethod().subscribe(
			suc => {console.log("get suc"); console.log(suc)}, 
			err => console.log("get err"), 
			fin => console.log("get fin")
		);
	}
	getHeroes() {
		console.log("get Heros");
		this.heroService.getHeroes().subscribe(
			suc => {console.log("suc"); console.log(suc)}, 
			err => console.log("err"), 
			fin => console.log("fin")
		);
	}
}
