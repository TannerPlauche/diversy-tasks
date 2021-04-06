const TaskService = require("../services/task-service");
const Router = require('express').router;

module.exports = class TaskController {

    constructor(app) {
        this.app = app;
        this.configure(this.app);
    }

    configure(app) {
        app.get('', this.findAll);

        app.post('/', this.create);

        app.get('/:id', this.findById);

        app.put('/:id', this.updateById);

        app.delete('/:id', this.deleteById);

    }

    findAll(req, res) {
        const allTasks = TaskService.findAll();
        res.send(allTasks);
    }

    create(req, res) {
        const newTask = req.body;
        let savedTask = TaskService.create(newTask);
        res.send(savedTask);
    }

    findById(req, res) {
        const id = req.params.id;
        const task = TaskService.findById(id);
        res.send(task);
    }

    updateById(req, res) {
        const id = req.params.id;
        const task = req.body;
        const updatedTask = TaskService.updateById(id, task);
        res.send(updatedTask);
    }

    deleteById(req, res) {
        const id = route.params.id;
        const success = TaskService.deleteById(id);
        res.send(success);
    }

}
