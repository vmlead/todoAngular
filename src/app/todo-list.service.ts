import { Injectable } from '@angular/core';

import { TodoListStorageService } from './todo-list-storage.service';

@Injectable()
export class TodoListService {

  constructor(private storage:TodoListStorageService) { }

  getTodoList() {
    return this.storage.get();
  }

  addItem(item: { title: any; }) {
    return this.storage.post(item);
  }

  removeItem(item: any) {
    return this.storage.destroy(item);
  }
}
