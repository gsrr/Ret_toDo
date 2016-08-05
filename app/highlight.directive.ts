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
		var items = this.el.id.split("_")
		var op = items[0];
		var task = items[1];
		if(op == "comment")
		{
			this.comment(task);
		}
		else if(op == "result")
		{
			this.result(task);
		}
	}
	
	private comment(task:string){
		console.log("comment:", task);
		$("#task_list").hide();
		$("#task_comment").show();
		$("#name_cmt").val(task);

	}

	private result(task:string){
		console.log("result");
		$("#task_list").hide();
		$("#task_result").show();
	}
	private highlight(color: string) {
		this.el.style.backgroundColor = color;
	}
}
