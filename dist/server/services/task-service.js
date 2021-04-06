"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var di_1 = require("@tsed/di");
var node_json_db_1 = require("node-json-db");
var JsonDBConfig_1 = require("node-json-db/dist/lib/JsonDBConfig");
var path_1 = require("path");
var uuid_1 = require("uuid");
var TaskService = /** @class */ (function () {
    function TaskService() {
        var dbPath = path_1.default.join(__dirname, '..', 'jsonDB.json');
        this.jsonDB = new node_json_db_1.JsonDB(new JsonDBConfig_1.Config(dbPath, true, true, '/'));
    }
    TaskService.prototype.findAll = function () {
        return this.jsonDB.getData('/tasks');
    };
    TaskService.prototype.findById = function (id) {
        return this.jsonDB.getData('/tasks').find(function (task) { return task.id === id; });
    };
    TaskService.prototype.create = function (task) {
        task.id = uuid_1.v4();
        this.jsonDB.push('/tasks[]', task, true);
        return task;
    };
    TaskService.prototype.updateById = function (id, task) {
        var index = this.jsonDB.getData('/tasks').findIndex(function (task) { return task.id === id; });
        console.log('index', index);
        this.jsonDB.push("/tasks[" + index + "]", task);
        return task;
    };
    TaskService.prototype.deleteById = function (id) {
        var index = this.jsonDB.getData('/tasks').findIndex(function (task) { return task.id === id; });
        console.log('index', index);
        this.jsonDB.delete("/tasks[" + index + "]");
        return true;
    };
    TaskService = __decorate([
        di_1.Injectable()
    ], TaskService);
    return TaskService;
}());
exports.default = TaskService;
