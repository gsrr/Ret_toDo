import { Component } from 'angular2/core';

export class Hero {
id: number;
name: string;
}
@Component({
selector: 'my-app',
templateUrl: 'test.html' 
})
export class AppComponent {
	constructor() {
	    this.name = 'Max'
	}
	sayMyName() {
  		console.log('My name is', this.name)
		if(this.name == "Max")
		{
			this.name = "ClickButton"
		}
		else
		{
			this.name = "Max";
		}
	}
	title = 'Tour of Heroes';
	hero: Hero = {
	id: 1,
		name: 'Windstorm'
	  };
}
