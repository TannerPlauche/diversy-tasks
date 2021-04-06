const TaskService = require("../services/task-service");
const Router = require('express').Router;


class TaskController {

    static findAll(req, res) {
        const allTasks = TaskService.findAll();
        res.send(allTasks);
    }

    static create(req, res) {
        const newTask = req.body;
        let savedTask = TaskService.create(newTask);
        res.send(savedTask);
    }

    static findById(req, res) {
        const id = req.params.id;
        const task = TaskService.findById(id);
        res.send(task);
    }

    static updateById(req, res) {
        const id = req.params.id;
        const task = req.body;
        const updatedTask = TaskService.updateById(id, task);
        res.send(updatedTask);
    }

    static deleteById(req, res) {
        const id = req.params.id;
        console.log('id', id)
        const success = TaskService.deleteById(id);
        res.send(success);
    }
}

const TaskRouter = Router();

TaskRouter.get('', TaskController.findAll);

TaskRouter.post('/', TaskController.create);

TaskRouter.get('/:id', TaskController.findById);

TaskRouter.put('/:id', TaskController.updateById);

TaskRouter.delete('/:id', TaskController.deleteById);

module.exports = TaskRouter
