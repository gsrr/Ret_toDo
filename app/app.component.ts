import { Component } from 'angular2/core';
import { Hero } from './hero';
import { Column } from './column';
import { HttpService } from './http.services';
import { HeroService } from './hero.services';
import { HighlightDirective } from './highlight.directive';
import { RowDecorateDirective } from './rowdecorate.directive';
import { HTTP_PROVIDERS } from 'angular2/http';
import { JSONP_PROVIDERS }  from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { FormGroup, FormBuilder, Validators } from 'angular2/common';

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
	status : string;
}

const OPS: OP[] = [
	{id: "list", name: "List", class: "active", func: "list"},
	{id: "create", name: "Create", class: "", func: "create"}
];

const TASKS: TASK[] = [];

@Component({
	selector : 'my-app',
	templateUrl : 'app.html',
	directives: [HighlightDirective, RowDecorateDirective],
	providers: [JSONP_PROVIDERS, HTTP_PROVIDERS, HttpService, HeroService]
})
export class AppComponent {
	title = 'Tour of Tasks';
	ops = OPS;
	tasks = TASKS;

	columns = [
			new Column("Index", ''),
			new Column("Name", 'Name of task'),
			new Column("Category", 'Category of task'),
			new Column("Deadline", 'Deadline of task'),
			new Column("Comment", ''),
			new Column("Result", ''),
	];

	createTask() { 
			this.heroes.push(new Hero(100,'First Name'));
			$("#taskList").hide();
			$("#createTask").show();
	}

	op_Create(){
		console.log("op_create");
		$("#task_list").hide();	
		$("#task_create").show();
	}

	op_List(){
		function pad(num, size) {
		    var s = num+"";
			while (s.length < size) s = "0" + s;
			return s;
		}
		var url = "http://127.0.0.1:5000/list";
		this.httpMethod.postMethod(url, {}).subscribe(
			suc => {
				console.log("post suc"); 
				console.log(suc);
				for (var i = 0 ; i < suc['data'].length; i++)
				{
					var data = suc['data'][i];
					var task = {
						'id' : pad(i+1, 3),
						'name' : data[0],
						'cate' : data[1],
						'dead' : data[2],
					}
					var tt = new TASK(
						"002", data[0], data[1], data[2]);
					this.tasks.push(task);
				}
			}, 
			err => console.log("post err"), 
			fin => console.log("post fin")
		);

	}
	opstart(event){
		var target = event.target;
		var id = target.attributes.id;
		if(id.value == "op_Create")
		{
			this.op_Create();	
		}
		else if(id.value == "op_List")
		{
			this.op_List();
		}
	}

	submitCreate(form: any){
		var url = "http://127.0.0.1:5000/create";
		console.log("form:", form);
		this.httpMethod.postMethod(url, form).subscribe(
			suc => {
				console.log("post suc"); 
				console.log(suc);
				window.location.href = "./index.html";
			}, 
			err => console.log("post err"), 
			fin => console.log("post fin")
		);
	}
	constructor(private httpMethod: HttpService){
		$("#task_create").hide();	
		this.op_List();
	}

}
