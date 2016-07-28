import { Directive, ElementRef, HostListener, Input } from 'angular2/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
	private el: HTMLElement;
	numberOfClicks = 0;

	constructor(el: ElementRef) { this.el = el.nativeElement; }

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
	}

	private highlight(color: string) {
		this.el.style.backgroundColor = color;
	}
}
