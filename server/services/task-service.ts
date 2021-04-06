import {Configuration, Injectable, Constant} from "@tsed/di";
import {JsonDB} from 'node-json-db';
import {Config} from 'node-json-db/dist/lib/JsonDBConfig'
import path from 'path';
import {ITask} from "../../shared/types/i-task";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export default class TaskService {

    private jsonDB: JsonDB;

    constructor() {
        const dbPath = path.join(__dirname, '..', 'jsonDB.json');
        this.jsonDB = new JsonDB(new Config(dbPath, true, true, '/'));
    }

    findAll(): ITask[] {
        return this.jsonDB.getData('/tasks');
    }

    findById(id: string): ITask {
        return this.jsonDB.getData('/tasks').find(task => task.id === id);
    }

    create(task: ITask): ITask {
        task.id = uuidv4();
        this.jsonDB.push('/tasks[]', task, true);
        return task;
    }

    updateById(id: string, task: ITask): ITask {
        let index = this.jsonDB.getData('/tasks').findIndex(task => task.id === id);
        console.log('index',index);
        this.jsonDB.push(`/tasks[${index}]`, task);
        return task;
    }

    deleteById(id: string): boolean {
        let index = this.jsonDB.getData('/tasks').findIndex(task => task.id === id);
        console.log('index',index);
        this.jsonDB.delete(`/tasks[${index}]`);
        return true;
    }

}
