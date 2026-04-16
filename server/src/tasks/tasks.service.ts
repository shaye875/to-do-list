import { Injectable, Inject } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { Task } from './task.interfaese';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASK_MODEL')
    private taskModel: Model<Task>
  ) { }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createTask = new this.taskModel(createTaskDto)
    return createTask.save();
  }

  async findAll() {
    return this.taskModel.find().exec();
  }

  async findOne(id: string) {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) { 
    return this.taskModel
      .findByIdAndUpdate(id, updateTaskDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.taskModel.findByIdAndDelete(id).exec();
  }

  async removeAll() {
    return this.taskModel.deleteMany({}).exec();
  }
}
