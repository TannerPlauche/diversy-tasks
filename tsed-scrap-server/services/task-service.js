const JsonDB = require('node-json-db');
const Config = require('node-json-db/dist/lib/JsonDBConfig');
const path = require('path');
const uuidv4 = require('uuid').v4;

const dbPath = path.join(__dirname, '..', 'jsonDB.json');
const jsonDB = new JsonDB(new Config(dbPath, true, true, '/'));

module.exports = class TaskService {

    static findAll() {
        return jsonDB.getData('/tasks');
    }

    static findById(id) {
        return jsonDB.getData('/tasks').find(task => task.id === id);
    }

    static create(task) {
        task.id = uuidv4();
        jsonDB.push('/tasks[]', task, true);
        return task;
    }

    static updateById(id, task) {
        let index = jsonDB.getData('/tasks').findIndex(task => task.id === id);
        console.log('index', index);
        jsonDB.push(`/tasks[${index}]`, task);
        return task;
    }

    static deleteById(id) {
        let index = jsonDB.getData('/tasks').findIndex(task => task.id === id);
        console.log('index', index);
        jsonDB.delete(`/tasks[${index}]`);
        return true;
    }

}
