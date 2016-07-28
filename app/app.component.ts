import { Component } from 'angular2/core';
import { Hero } from './hero';
import { Column } from './column';
import { HighlightDirective } from './highlight.directive';

export class OP {
	id: string;
	name: string;
	class: string;
	func: string;
}

export class TASK {
	id : string;
	name : string;
	cate : string;
	dead : string;
	remain : number;
	progress : number;
	result : string;
}

const OPS: OP[] = [
	{id: "list", name: "List", class: "active", func: "list"},
	{id: "create", name: "Create", class: "", func: "create"}
];

const TASKS: TASK[] = [
	{id : "001", name: "task1", cate: "t1", dead: "20160805", remain: 7, progress : 0, result : "unComplete"}
];

@Component({
	selector : 'my-app',
	templateUrl : 'app.html',
	directives: [HighlightDirective],
})
export class AppComponent {
	title = 'Tour of Tasks';
	ops = OPS;
	tasks = TASKS;

	columns = [
		new Column("ID", ''),
		new Column("Name", 'Name of task'),
			new Column("Category", 'Category of task'),
			new Column("Deadline", 'Deadline of task'),
			new Column("Remaining days", ''),
			new Column("Progress", ''),
			new Column("Result", ''),
			];

	createTask() { 
			this.heroes.push(new Hero(100,'First Name'));
			$("#taskList").hide();
			$("#createTask").show();
	}
	createSubmit(){
		console.log($("#tname").val());
		console.log("Call Python\n")
	}
	constructor(){
		$("#createTask").hide();
	}

}
