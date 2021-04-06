import {BodyParams, Controller, Delete, Get, PathParams, Post, Put} from "@tsed/common";
import TaskService from "../services/task-service";
import {ITask} from "../../shared/types/i-task";

@Controller("/tasks")
export default class TaskController {

    constructor(private _taskService: TaskService) {
    }

    @Get('')
    findAll(): ITask[] {
        return this._taskService.findAll();
    }

    @Post('/')
    create(@BodyParams() newTask: ITask): ITask {
        return this._taskService.create(newTask);
    }

    @Get('/:id')
    findById(@PathParams("id") id: string): ITask {
        return this._taskService.findById(id);
    }

    @Put('/:id')
    updateById(@PathParams("id") id: string, @BodyParams() task: ITask): ITask {
        return this._taskService.updateById(id, task);
    }

    @Delete('/:id')
    deleteById(@PathParams("id") id: string): boolean {
        return this._taskService.deleteById(id);
    }

}
