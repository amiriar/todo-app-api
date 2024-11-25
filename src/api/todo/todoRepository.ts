import { type ITodo, TodoModel } from "./todoSchema";

export class TodoRepository {
  async findAllAsync(id: string): Promise<ITodo[]> {
    return await TodoModel.find({ author: id });
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
