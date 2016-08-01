import { Directive, ElementRef, HostListener, Input } from 'angular2/core';
import { Injectable } from 'angular2/core';
import { HttpService } from './http.services';

@Directive({ selector: '[rowDecorate]' })
export class RowDecorateDirective {
	private el: HTMLElement;

	constructor(el: ElementRef, private httpMethod: HttpService) { this.el = el.nativeElement; }

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('yellow');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}

	@HostListener('click', ['$event.target'])onClick(btn) {}
	@HostListener('dblclick', ['$event.target'])doubleClicked(btn) {
		console.log("delete item");
		console.log(this.el.id);
		console.log(this.el.children[1]);
		var url = "http://127.0.0.1:5000/delete";
		var paras = {'name' : this.el.id}
		this.httpMethod.postMethod(url, paras).subscribe(
			suc => {
				console.log("post suc"); 
				console.log(suc);
				window.location.href = "./index.html";
			}, 
			err => console.log("post err"), 
			fin => console.log("post fin")
		);
		
	}

	private highlight(color: string) {
		this.el.style.backgroundColor = color;
	}
}
