"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@tsed/common");
var TaskController = /** @class */ (function () {
    function TaskController(_taskService) {
        this._taskService = _taskService;
    }
    TaskController.prototype.findAll = function () {
        return this._taskService.findAll();
    };
    TaskController.prototype.create = function (newTask) {
        return this._taskService.create(newTask);
    };
    TaskController.prototype.findById = function (id) {
        return this._taskService.findById(id);
    };
    TaskController.prototype.updateById = function (id, task) {
        return this._taskService.updateById(id, task);
    };
    TaskController.prototype.deleteById = function (id) {
        return this._taskService.deleteById(id);
    };
    __decorate([
        common_1.Get('')
    ], TaskController.prototype, "findAll", null);
    __decorate([
        common_1.Post('/'),
        __param(0, common_1.BodyParams())
    ], TaskController.prototype, "create", null);
    __decorate([
        common_1.Get('/:id'),
        __param(0, common_1.PathParams("id"))
    ], TaskController.prototype, "findById", null);
    __decorate([
        common_1.Put('/:id'),
        __param(0, common_1.PathParams("id")), __param(1, common_1.BodyParams())
    ], TaskController.prototype, "updateById", null);
    __decorate([
        common_1.Delete('/:id'),
        __param(0, common_1.PathParams("id"))
    ], TaskController.prototype, "deleteById", null);
    TaskController = __decorate([
        common_1.Controller("/tasks")
    ], TaskController);
    return TaskController;
}());
exports.default = TaskController;
