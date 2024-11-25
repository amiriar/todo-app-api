import type { ITodo } from "@/api/todo/todoSchema";
import { TodoModel } from "@/api/todo/todoSchema";

export class TodoRepository {
  async findAllAsync(): Promise<ITodo[]> {
    return await TodoModel.find();
  }

  async findByIdAsync(id: string): Promise<ITodo | null> {
    return await TodoModel.findById(id);
  }

  async createAsync(todoData: Partial<ITodo>): Promise<ITodo> {
    const todo = new TodoModel(todoData);
    return await todo.save();
  }

  async updateAsync(id: string, todoData: Partial<ITodo>): Promise<ITodo | null> {
    return await TodoModel.findByIdAndUpdate(id, todoData, { new: true });
  }

  async deleteAsync(id: string): Promise<ITodo | null> {
    return await TodoModel.findByIdAndDelete(id);
  }
}
