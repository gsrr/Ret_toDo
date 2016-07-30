System.register(['angular2/core', './hero', './column', './hero.services', './highlight.directive', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, hero_1, column_1, hero_services_1, highlight_directive_1, http_1, http_2;
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
            function (hero_services_1_1) {
                hero_services_1 = hero_services_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
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
            TASKS = [
                { id: "001", name: "task1", cate: "t1", dead: "20160805", remain: 7, progress: 0, result: "unComplete" }
            ];
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Tasks';
                    this.ops = OPS;
                    this.tasks = TASKS;
                    this.columns = [
                        new column_1.Column("ID", ''),
                        new column_1.Column("Name", 'Name of task'),
                        new column_1.Column("Category", 'Category of task'),
                        new column_1.Column("Deadline", 'Deadline of task'),
                        new column_1.Column("Remaining days", ''),
                        new column_1.Column("Progress", ''),
                        new column_1.Column("Result", ''),
                    ];
                    $("#createTask").hide();
                }
                AppComponent.prototype.createTask = function () {
                    this.heroes.push(new hero_1.Hero(100, 'First Name'));
                    $("#taskList").hide();
                    $("#createTask").show();
                };
                AppComponent.prototype.createSubmit = function () {
                    console.log($("#tname").val());
                    console.log("Call Python\n");
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app.html',
                        directives: [highlight_directive_1.HighlightDirective],
                        providers: [http_2.JSONP_PROVIDERS, http_1.HTTP_PROVIDERS, hero_services_1.HeroService]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map