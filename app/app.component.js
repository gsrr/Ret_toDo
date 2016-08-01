System.register(['angular2/core', './hero', './column', './http.services', './hero.services', './highlight.directive', './rowdecorate.directive', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_1, column_1, http_services_1, hero_services_1, highlight_directive_1, rowdecorate_directive_1, http_1, http_2;
    var OP, TASK, OPS, TASKS, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (column_1_1) {
                column_1 = column_1_1;
            },
            function (http_services_1_1) {
                http_services_1 = http_services_1_1;
            },
            function (hero_services_1_1) {
                hero_services_1 = hero_services_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (rowdecorate_directive_1_1) {
                rowdecorate_directive_1 = rowdecorate_directive_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            }],
        execute: function() {
            OP = (function () {
                function OP() {
                }
                return OP;
            }());
            exports_1("OP", OP);
            TASK = (function () {
                function TASK() {
                }
                return TASK;
            }());
            exports_1("TASK", TASK);
            OPS = [
                { id: "list", name: "List", class: "active", func: "list" },
                { id: "create", name: "Create", class: "", func: "create" }
            ];
            TASKS = [];
            AppComponent = (function () {
                function AppComponent(httpMethod) {
                    this.httpMethod = httpMethod;
                    this.title = 'Tour of Tasks';
                    this.ops = OPS;
                    this.tasks = TASKS;
                    this.columns = [
                        new column_1.Column("Index", ''),
                        new column_1.Column("Name", 'Name of task'),
                        new column_1.Column("Category", 'Category of task'),
                        new column_1.Column("Deadline", 'Deadline of task'),
                        new column_1.Column("Remaining days", ''),
                        new column_1.Column("Progress", ''),
                        new column_1.Column("Status", ''),
                    ];
                    $("#task_create").hide();
                    this.op_List();
                }
                AppComponent.prototype.createTask = function () {
                    this.heroes.push(new hero_1.Hero(100, 'First Name'));
                    $("#taskList").hide();
                    $("#createTask").show();
                };
                AppComponent.prototype.op_Create = function () {
                    console.log("op_create");
                    $("#task_list").hide();
                    $("#task_create").show();
                };
                AppComponent.prototype.op_List = function () {
                    var _this = this;
                    function pad(num, size) {
                        var s = num + "";
                        while (s.length < size)
                            s = "0" + s;
                        return s;
                    }
                    var url = "http://127.0.0.1:5000/list";
                    this.httpMethod.postMethod(url, {}).subscribe(function (suc) {
                        console.log("post suc");
                        console.log(suc);
                        for (var i = 0; i < suc['data'].length; i++) {
                            var data = suc['data'][i];
                            var task = {
                                'id': pad(i + 1, 3),
                                'name': data[0],
                                'cate': data[1],
                                'dead': data[2],
                                'remain': data[3],
                                'progress': data[4],
                                'status': data[5],
                            };
                            var tt = new TASK("002", data[0], data[1], data[2], data[3], data[4], data[5]);
                            _this.tasks.push(task);
                        }
                    }, function (err) { return console.log("post err"); }, function (fin) { return console.log("post fin"); });
                };
                AppComponent.prototype.opstart = function (event) {
                    var target = event.target;
                    var id = target.attributes.id;
                    if (id.value == "op_Create") {
                        this.op_Create();
                    }
                    else if (id.value == "op_List") {
                        this.op_List();
                    }
                };
                AppComponent.prototype.submitCreate = function (form) {
                    form['remain'] = 1;
                    form['progress'] = 0;
                    form['status'] = "Not_Finish";
                    var url = "http://127.0.0.1:5000/create";
                    console.log("form:", form);
                    this.httpMethod.postMethod(url, form).subscribe(function (suc) {
                        console.log("post suc");
                        console.log(suc);
                        window.location.href = "./index.html";
                    }, function (err) { return console.log("post err"); }, function (fin) { return console.log("post fin"); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app.html',
                        directives: [highlight_directive_1.HighlightDirective, rowdecorate_directive_1.RowDecorateDirective],
                        providers: [http_2.JSONP_PROVIDERS, http_1.HTTP_PROVIDERS, http_services_1.HttpService, hero_services_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [http_services_1.HttpService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map