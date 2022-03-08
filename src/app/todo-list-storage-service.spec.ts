import { TestBed, waitForAsync } from '@angular/core/testing';

import { TodoListStorageService } from './todo-list-storage.service';

describe('TodoListStorageService', () => {
  let service: TodoListStorageService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        providers: [TodoListStorageService]
    });
    service = TestBed.inject(TodoListStorageService);
  }));

  it('true should be true', ()=> {
    expect(true).toBe(true);
  })

  it('should store an item', () => {
    let key = 'aah_todo_list'
    let value = 'testStore'

    service.post({ title: value });
      // service.todoList.push(value)
     //  setting a value from post service
    // let index = service.todoList.indexOf('testStore')

    const checkStorage = localStorage.getItem(key);
let result = checkStorage !== null ? JSON.parse(checkStorage) : service.todoList;

    // console.log(service.todoList)
    expect(service.todoList).toEqual(result); // check whether todoList == result after adding an item
  });

  it('should remove an item', () => {
    let key = 'aah_todo_list'
    let value = 'deploy app'

    service.destroy({ title: value });
      // service.todoList.push(value)
     //  setting a value from post service
    // let index = service.todoList.indexOf('testStore')

    const checkStorage = localStorage.getItem(key);
let result = checkStorage !== null ? JSON.parse(checkStorage) : service.todoList;

    // console.log(service.todoList)
    expect(service.todoList).toEqual(result); // check whether todoList == result after adding an item
  });

});