import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';

const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

@Injectable()
export class TodoListStorageService {

  public todoList;

  constructor() {
    const checkList = localStorage.getItem(storageName);
this.todoList = checkList !== null ? JSON.parse(checkList) : defaultList;
  }

  // get items
  get() {
    return [...this.todoList];
  }

  // add a new item
  post(item: any) {
    this.todoList.push(item);
    return this.update();
  }

  // update an item
  // put(item: any, changes: any) {
  //   Object.assign(this.todoList[this.findItemIndex(item)], changes);
  //   return this.update();
  // }

  // remove an item
  destroy(item: any) {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }

  private findItemIndex(item: { title: string; }) {
    return this.todoList.indexOf(item);
  }
}
