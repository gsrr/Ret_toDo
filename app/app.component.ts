import { Component } from 'angular2/core';
import { Hero } from './hero';
import { Column } from './column';
import { HttpService } from './http.services';
import { HeroService } from './hero.services';
import { HighlightDirective } from './highlight.directive';
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
	providers: [JSONP_PROVIDERS, HTTP_PROVIDERS, HttpService, HeroService]
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

	op_Create(){
		console.log("op_create");
		$("#task_list").hide();	
		$("#task_create").show();
	}

	opstart(event){
		var target = event.target;
		var id = target.attributes.id;
		if(id.value == "op_Create")
		{
			this.op_Create();	
		}
	}

	submitCreate(form: any){
		form['tremain'] = 1;
		form['tprogress'] = 0;
		form['tresult'] = "Not_Finish";
		var url = "http://127.0.0.1:5000/";
		console.log("form:", form);
		this.httpMethod.postMethod(url, form).subscribe(
			suc => {console.log("post suc"); console.log(suc)}, 
			err => console.log("post err"), 
			fin => console.log("post fin")
		);
	}
	constructor(private httpMethod: HttpService){
		$("#task_create").hide();	
	}

}
