System.register(['angular2/core', './hero', './column'], function(exports_1, context_1) {
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
    var core_1, hero_1, column_1;
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
                { name: "task1", cate: "t1", dead: "20160705" }
            ];
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Tasks';
                    this.ops = OPS;
                    this.tasks = TASKS;
                    this.columns = [
                        new column_1.Column("Name", 'Windstorm'),
                        new column_1.Column("Category", 'Bombasto'),
                        new column_1.Column("Deadline", 'Magneta'),
                    ];
                    this.heroes = [
                        new hero_1.Hero(1, 'Windstorm'),
                        new hero_1.Hero(13, 'Bombasto'),
                        new hero_1.Hero(15, 'Magneta'),
                        new hero_1.Hero(20, 'Tornado')
                    ];
                    this.myHero = this.heroes[0];
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